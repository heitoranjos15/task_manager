import { ITask } from '../task/types'
import { getTasks, getTaskById, getTasksByEmployee } from '../task/list-task'
import { editTask } from '../task/edit-task'
import * as taskRepository from '../../database/repositories/task-repository'

import { EJob } from '../../enum/job.enum'
import { IEmployee } from './types'

const isTech = (employee: IEmployee): boolean => employee.job === EJob.TECH

const taskIsFromEmployee = (task: ITask, employee: IEmployee): boolean => task.employee.id === employee.id

export const getEmployeeTask = async (taskId: number, employee: IEmployee): Promise<ITask> => {
  const task = await getTaskById(taskId, employee.id)

  if (isTech(employee) && !taskIsFromEmployee(task, employee)) {
    throw Error('You havent a permission')
  }
  return task
}

export const getEmployeeTaskList = async (employee: IEmployee): Promise<ITask[]> => {
  const tasks = await getTasksByEmployee(employee.id)

  if (!tasks?.length) {
    throw Error('You have no task')
  }
  return tasks
}

export const getAllTasks = (employee: IEmployee): Promise<ITask[]> => {
  if (isTech(employee)) {
    throw Error('You havent a permission')
  }

  return getTasks()
}

export const deleteTask = async (taskId: number, employee: IEmployee): Promise<boolean> => {
  if (isTech(employee)) {
    throw Error('You havent a permission')
  }
  await taskRepository.deleteTask(taskId)
  return true
}

export const editEmployeeTask = async (taskId: number, employee: IEmployee, task: Partial<ITask>): Promise<boolean> => {
  const taskResult = await getTaskById(taskId)
  if (isTech(employee) && !taskIsFromEmployee(taskResult, employee)) {
    throw Error('You havent a permission')
  }
  await editTask(taskId, task)
  return true
}

