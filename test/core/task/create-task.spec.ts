import { createTask } from '../../../src/core/task/create-task'
import { addDays } from 'date-fns'
import { employeeTech } from '../../mocks/employee-mock'
import * as taskRepository from '../../../src/database/repositories/task-repository'

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
    jest.spyOn(taskRepository, 'createTask').mockResolvedValueOnce({ ...expectTask, Employee: employeeTech })
    expect(await createTask('task', today, employeeTech)).toEqual(expectTask)
  })

  it('should raise a error when the date is greater than today', () => {
    expect(createTask('task', tomorrow, employeeTech))
      .rejects.toEqual(Error('BAD_REQUEST'))
  })
})
