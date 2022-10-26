import { TasManagerkErrors } from '../../exception/taskManagerErrors'
import { isAlreadyDone } from '../../helper/date-validations'
import { IEmployee } from '../employee/types'
import { ITask } from './types'
import { formatTask } from './helper'
import * as taskRepository from '../../database/repositories/task-repository'

export const createTask = async (summary: string, datePerformed: Date, employee: IEmployee): Promise<ITask> => {
  if (!isAlreadyDone(datePerformed)) {
    throw Error(TasManagerkErrors.BAD_REQUEST)
  }

  try {
    const result = await taskRepository.createTask(summary, datePerformed, employee.id)
    return formatTask(result)
  } catch (error) {
    console.log('/createTask', error)
    throw Error(TasManagerkErrors.UNEXPECTED)
  }
}
