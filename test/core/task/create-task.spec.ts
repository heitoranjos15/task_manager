import { createTask } from '../../../src/core/task/create-task'
import { addDays } from 'date-fns'
import { employeeTech } from '../../mocks/employee-mock'
import * as taskRepository from '../../../src/database/repositories/task-repository'
import * as messageQueue from '../../../src/server/services/message-queue'

const today = new Date()
const tomorrow = addDays(today, 1)

const expectTask = {
  id: 0,
  summary: 'task',
  datePerformed: today,
  employee: { ...employeeTech, job: 'Tech' }
}

describe('core/task/create-task', () => {
  it('should create task', async () => {
    const createTaskMock = jest.spyOn(taskRepository, 'createTask').mockResolvedValueOnce({ ...expectTask, Employee: employeeTech })
    const queueMock = jest.spyOn(messageQueue, 'publishToQueue').mockResolvedValueOnce(undefined)
    expect(await createTask('task', today, employeeTech)).toEqual(expectTask)
    expect(createTaskMock).toBeCalled()
    expect(queueMock).toBeCalled()
  })

  it('should raise a error when the date is greater than today', () => {
    expect(createTask('task', tomorrow, employeeTech))
      .rejects.toEqual(Error('BAD_REQUEST'))
  })
})
