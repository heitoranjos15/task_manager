import { isAlreadyDone } from '../../helpers/date-validations'
import { getTaskById } from './list-task'
import { ITask } from './types'

export const editTask = (id: number, taskEditData: Partial<ITask>): boolean => {
  const task = getTaskById(id)

  if (!task) {
    throw Error('Task not found')
  }

  const { date } = taskEditData;
  if (date && !isAlreadyDone(date)) {
    throw Error('Task cannot be edit with date greater than now')
  }
  return true
}
