import { addDays } from 'date-fns'

import { editTask } from '../../../src/core/task/edit-task'
import * as listTask from '../../../src/core/task/list-task'

import { taskMock } from '../../mocks/task-mock'


const today = new Date()
const tomorrow = addDays(today, 1)

describe('core/task/create-task', () => {
  it('should edit task', () => {
    jest.spyOn(listTask, 'getTaskById').mockReturnValueOnce(taskMock)
    expect(editTask(0, { summary: 'task', date: today })).toEqual(true)
  })

  it('should edit task even date isnt informed', () => {
    jest.spyOn(listTask, 'getTaskById').mockReturnValueOnce(taskMock)
    expect(editTask(0, { summary: 'task' })).toEqual(true)
  })

  it('should raise a error when task is not found', () => {
    jest.spyOn(listTask, 'getTaskById').mockReturnValueOnce(null)
    expect(() => editTask(99, { summary: 'task', date: tomorrow })).toThrowError('Task not found')
  })

  it('should raise a error when the date is greater than today', () => {
    jest.spyOn(listTask, 'getTaskById').mockReturnValueOnce(taskMock)
    expect(() => editTask(0, { summary: 'task', date: tomorrow })).toThrowError('Task cannot be edit with date greater than now')
  })
})
