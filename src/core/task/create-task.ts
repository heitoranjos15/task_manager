import { isAlreadyDone } from '../../helper/date-validations'
import { IEmployee } from '../employee/types'
import { ITask } from './types'
import { formatTask } from './helper'
import * as taskRepository from '../../database/repositories/task-repository'

export const createTask = async (summary: string, datePerformed: Date, employee: IEmployee): Promise<ITask> => {
  if (!isAlreadyDone(datePerformed)) {
    throw Error('Save only tasks that you already performed')
  }

  try {
    const result = await taskRepository.createTask(summary, datePerformed, employee.id)
    return formatTask(result)
  } catch (error) {
    console.error(error)
    throw error
  }
}
