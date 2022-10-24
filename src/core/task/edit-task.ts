import { isAlreadyDone } from '../../helpers/date-validations'
import { TaskBoardReturn } from '../../types/common.interface'
import { ITask } from './types'

export const editTask = (id: number, summary?: string, date?: Date): TaskBoardReturn<ITask> => {
  if (date && !isAlreadyDone(date)) {
    return {
      result: {
        type: 'error',
        message: 'Task cannot be edit with date greater than now',
      }
    }
  }
  return {
    result: {
      type: 'success',
      data: {
        id,
        summary,
        date,
      }
    },
  }
}
