import { TasManagerkErrors } from '../../exception/taskManagerErrors'
import { ITask } from './types'
import { formatTask } from './helper'
import * as taskRepository from '../../database/repositories/task-repository'

export const getTaskById = async (id: number, employeeId?: number): Promise<ITask> => {
  try {
    const result = await taskRepository.findTaskById(id, employeeId)
    return formatTask(result)
  } catch (error) {
    console.error('/getTaskById', error)
    throw Error(TasManagerkErrors.UNEXPECTED)
  }
}

export const getTasksByEmployee = async (employeeId: number): Promise<ITask[]> => {
  try {
    const result = await taskRepository.findTasksByEmployee(employeeId)
    return result.map((task: any) => formatTask(task))
  } catch (error) {
    console.error('/getTasksByEmployee', error)
    throw Error(TasManagerkErrors.UNEXPECTED)
  }
}

export const getTasks = async (): Promise<ITask[]> => {
  try {
    const result = await taskRepository.findAllTask()
    return result.map((task: any) => formatTask(task))
  } catch (error) {
    console.error('/getTasks', error)
    throw Error(TasManagerkErrors.UNEXPECTED)
  }
}

