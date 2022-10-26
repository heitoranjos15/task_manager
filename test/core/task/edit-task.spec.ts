import { addDays } from 'date-fns'

import { editTask } from '../../../src/core/task/edit-task'
import * as taskRepository from '../../../src/database/repositories/task-repository'

const today = new Date()
const tomorrow = addDays(today, 1)

describe('core/task/edit-task', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should edit task', async () => {
    const mock = jest.spyOn(taskRepository, 'editTask').mockResolvedValueOnce(true)
    expect(await editTask(0, { summary: 'task', datePerformed: tomorrow })).toBeUndefined()
    expect(mock).toBeCalled()
  })

  it('should edit task even date isnt informed', async () => {
    const mock = jest.spyOn(taskRepository, 'editTask').mockResolvedValueOnce(true)
    expect(await editTask(0, { summary: 'task' })).toBeUndefined()
    expect(mock).toBeCalled()
  })

  it('should raise a error when the date is greater than today', async () => {
    expect(editTask(0, { summary: 'task', datePerformed: today }))
      .rejects.toEqual(Error('BAD_REQUEST'))
  })
})
