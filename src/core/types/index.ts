export interface TaskManagerReturn<T> {
  result: Success | Error,
  data?: T
}
interface Success {
  type: 'success'
}

interface Error {
  type: 'error'
  message: string
}
