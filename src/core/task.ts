import { TaskManagerReturn } from './types'

interface ITask {
  id: number;
  summary: string;
  date: Date;
}

const createTask = (summary: string, date: Date): TaskManagerReturn<ITask> => {
  if (!isAlreadyDone(date)) {
    return {
      result: {
        type: 'error',
        message: 'Save only tasks that you already performed'
      }
    }
  }
  return {
    result: { type: 'success' },
    data: {
      id: 0,
      summary,
      date,
    }
  }
}

const editTask = (id: number, summary?: string, date?: Date): TaskManagerReturn<ITask> => {
  if (date && !isAlreadyDone(date)) {
    return {
      result: {
        type: 'error',
        message: 'Task cannot be edit with date greater than now',
      }
    }
  }
  return {
    result: { type: 'success' },
    data: {
      id,
      summary,
      date,
    }
  }
}

const isAlreadyDone = (date: Date): boolean => {
  const today = new Date()
  return date < today
}

export {
  createTask,
  editTask,
}
