import { ITask } from './types'
import { formatEmployee } from '../employee/get-employee'

export const formatTask = (data: any): ITask => {
  return {
    id: data.id,
    summary: data.summary,
    datePerformed: data.datePerformed,
    employee: data.Employee ? formatEmployee(data.Employee) : undefined
  }
}
