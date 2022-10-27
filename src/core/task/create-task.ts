import { TasManagerkErrors } from '../../exception/taskManagerErrors'
import { isAlreadyDone } from '../../helper/date-validations'
import { IEmployee } from '../employee/types'
import { ITask } from './types'
import { formatTask } from './helper'
import * as taskRepository from '../../database/repositories/task-repository'
import { publishToQueue } from '../../server/services/message-queue'

export const createTask = async (summary: string, datePerformed: Date, employee: IEmployee): Promise<ITask> => {
  if (!isAlreadyDone(datePerformed)) {
    throw Error(TasManagerkErrors.BAD_REQUEST)
  }

  try {
    const result = await taskRepository.createTask(summary, datePerformed, employee.id)
    const task = formatTask(result)

    const notifyMessage = `The Tech ${employee.name} performed task ${task.id} on date ${datePerformed}`
    console.log('sending message to notify-task', { task: task.id, employeeName: employee.name })
    await publishToQueue('notify-task', notifyMessage)

    return task
  } catch (error) {
    console.log('/createTask', error)
    throw Error(TasManagerkErrors.UNEXPECTED)
  }
}
