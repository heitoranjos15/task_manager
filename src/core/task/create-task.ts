import { isAlreadyDone } from '../../helpers/date-validations'
import { TaskBoardReturn } from '../../types/common.interface'
import { IEmployee } from '../employee/type'
import { ITask } from './types'

export const createTask = (summary: string, date: Date, employee: IEmployee): TaskBoardReturn<ITask> => {
  if (!isAlreadyDone(date)) {
    return {
      result: {
        type: 'error',
        message: 'Save only tasks that you already performed'
      }
    }
  }
  return {
    result: {
      type: 'success',
      data: {
        id: 0,
        summary,
        date,
        employee,
      }
    }
  }
}
