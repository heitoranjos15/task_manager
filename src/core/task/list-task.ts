import { ITask } from './types'
import { formatTask } from './helper'
import * as taskRepository from '../../database/repositories/task-repository'

export const getTaskById = async (id: number, employeeId?: number): Promise<ITask> => {
  try {
    const result = await taskRepository.findTaskById(id, employeeId)
    return formatTask(result)
  } catch (error) {
    throw error
  }
}

export const getTasksByEmployee = async (employeeId: number): Promise<ITask[]> => {
  try {
    const result = await taskRepository.findTasksByEmployee(employeeId)
    return result.map((task: any) => formatTask(task))
  } catch (error) {
    throw error
  }
}

export const getTasks = async (): Promise<ITask[]> => {
  try {
    const result = await taskRepository.findAllTask()
    return result.map((task: any) => formatTask(task))
  } catch (error) {
    throw error
  }
}

