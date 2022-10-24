import { editTask } from '../../../src/core/task/edit-task'
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
  it('should edit task', () => {
    expect(editTask(0, 'task', today)).toEqual(expectTask)
  })

  it('should raise a error when the date is greater than today', () => {
    expect(editTask(0, 'task', tomorrow)).toEqual({
      result: {
        type: 'error',
        message: 'Task cannot be edit with date greater than now',
      }
    })
  })
})
