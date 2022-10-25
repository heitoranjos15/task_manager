import { ITask } from '../task/types'
import { getTasks, getTaskById, getTasksByEmployee, getTaskByEmployee } from '../task/list-task'
import { editTask } from '../task/edit-task'

import { EJob } from '../../enum/job.enum'
import { IEmployee } from './types'

const isTech = (employee: IEmployee): boolean => employee.job === EJob.TECH

const taskIsFromEmployee = (task: ITask, employee: IEmployee): boolean => task.employee.id === employee.id

export const getEmployeeTask = (taskId: number, employee: IEmployee): ITask => {
  const task = getTaskById(taskId)

  if (isTech(employee) && !taskIsFromEmployee(task, employee)) {
    throw Error('You havent a permission')
  }
  return task
}

export const getEmployeeTaskList = (employee: IEmployee): ITask[] => {
  const tasks = getTasksByEmployee(employee.id)
  if (!tasks?.length) {
    throw Error('You have no task')
  }
  return tasks
}

export const getAllTasks = (employee: IEmployee): ITask[] => {
  if (isTech(employee)) {
    throw Error('You havent a permission')
  }

  const tasks = getTasks()
  return tasks
}

export const deleteTask = (task: ITask, employee: IEmployee): boolean => {
  if (isTech(employee) && !taskIsFromEmployee(task, employee)) {
    throw Error('You havent a permission')
  }
  return true
}

export const editEmployeeTask = (taskId: number, employee: IEmployee, task: Partial<ITask>): boolean => {
  let taskResult: ITask
  if (isTech(employee)) {
    taskResult = getTaskById(taskId)
  } else {
    taskResult = getTaskByEmployee(taskId, employee.id)
  }

  if (!taskResult) {
    throw Error('You havent a permission')
  }
  editTask(taskId, task)
  return true
}

