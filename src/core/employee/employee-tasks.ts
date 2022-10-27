import { TasManagerkErrors } from '../../exception/taskManagerErrors'
import { ITask } from '../task/types'
import { getTasks, getTaskById, getTasksByEmployee } from '../task/list-task'
import { editTask } from '../task/edit-task'
import * as taskRepository from '../../database/repositories/task-repository'

import { EJob } from '../../enum/job.enum'
import { IEmployee, ISuccess } from './types'

const isTech = (employee: IEmployee): boolean => employee.job === EJob.TECH

const taskIsFromEmployee = (task: ITask, employee: IEmployee): boolean => task.employee.id === employee.id

export const getEmployeeTask = async (taskId: number, employee: IEmployee): Promise<ITask> => {
  const task = await getTaskById(taskId, employee.id)

  if (isTech(employee) && !taskIsFromEmployee(task, employee)) {
    throw Error(TasManagerkErrors.NO_AUTHORIZATION)
  }
  return task
}

export const getEmployeeTaskList = async (employee: IEmployee): Promise<ITask[]> => {
  const tasks = await getTasksByEmployee(employee.id)

  if (!tasks?.length) {
    throw Error(TasManagerkErrors.NOT_FOUND)
  }
  return tasks
}

export const getAllTasks = async (employee: IEmployee): Promise<ITask[]> => {
  if (isTech(employee)) {
    throw Error(TasManagerkErrors.NO_AUTHORIZATION)
  }

  return getTasks()
}

export const deleteTask = async (taskId: number, employee: IEmployee): Promise<ISuccess> => {
  if (isTech(employee)) {
    throw Error(TasManagerkErrors.NO_AUTHORIZATION)
  }
  try {
    await taskRepository.deleteTask(taskId)
  } catch (error) {
    console.error('/deleteTask', error)
    throw Error(TasManagerkErrors.UNEXPECTED)
  }
  return {
    id: taskId,
    message: 'Task deleted with success',
    result: 'deleted'
  }
}

export const editEmployeeTask = async (taskId: number, employee: IEmployee, task: Partial<ITask>): Promise<ISuccess> => {
  const taskResult = await getTaskById(taskId)
  if (!taskIsFromEmployee(taskResult, employee)) {
    throw Error(TasManagerkErrors.NO_AUTHORIZATION)
  }
  await editTask(taskId, task)

  return {
    id: taskId,
    message: 'Task updated with success',
    result: 'updated'
  }
}
