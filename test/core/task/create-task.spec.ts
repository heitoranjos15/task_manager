import { createTask } from '../../../src/core/task/create-task'
import { addDays } from 'date-fns'

const today = new Date()
const tomorrow = addDays(today, 1)

const expectTask = {
  result: {
    type: 'success',
    data: {
      id: 0,
      summary: 'task',
      date: today
    }
  },
}

describe('core/task/create-task', () => {
  it('should create task', () => {
    expect(createTask('task', today)).toEqual(expectTask)
  })

  it('should raise a error when the date is greater than today', () => {
    expect(createTask('task', tomorrow)).toEqual({
      result: {
        type: 'error',
        message: 'Save only tasks that you already performed',
      }
    })
  })
})
