import { IEmployee } from '../employee/types'

export interface ITask {
  id: number
  summary: string
  datePerformed: Date
  employee: IEmployee
}
