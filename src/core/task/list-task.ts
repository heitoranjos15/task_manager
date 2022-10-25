import { ITask } from './types'
import { task } from '../../database/mock'

export const getTaskById = (id: number): ITask => {
  return task.find(task => task.id === id)
}

export const getTaskByEmployee = (id: number, employeeId: number): ITask => {
  return task.find(task => task.id === id && task.employee.id === employeeId)
}

export const getTasksByEmployee = (employeeId: number): ITask[] => {
  return task.filter(task => task.employee.id === employeeId)
}

export const getTasks = (): ITask[] => {
  return task;
}

