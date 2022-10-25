import { IEmployee } from '../employee/types'

export interface ITask {
  id: number
  summary: string
  date: Date
  employee: IEmployee
}
