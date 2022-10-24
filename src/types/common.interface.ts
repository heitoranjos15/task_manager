export interface TaskBoardReturn<T> {
  result: Success<T> | Error,
}
interface Success<T> {
  type: 'success'
  data: T
}

interface Error {
  type: 'error'
  message: string
}
