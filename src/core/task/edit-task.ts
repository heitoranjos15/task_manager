import { TasManagerkErrors } from '../../exception/taskManagerErrors'
import { isAlreadyDone } from '../../helper/date-validations'
import { ITask } from './types'
import * as taskRepository from '../../database/repositories/task-repository'

export const editTask = async (id: number, taskEditData: Partial<ITask>): Promise<void> => {
  const { datePerformed } = taskEditData;
  if (datePerformed && isAlreadyDone(datePerformed)) {
    throw Error(TasManagerkErrors.BAD_REQUEST)
  }
  try {
    await taskRepository.editTask(id, taskEditData)
  } catch (error) {
    console.error('editTask', error)
    throw Error(TasManagerkErrors.UNEXPECTED)
  }
}
