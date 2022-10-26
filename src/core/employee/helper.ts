import { IEmployee } from './types'
import { EJob } from '../../enum/job.enum'

export const formatEmployee = (data: any): IEmployee => {
  return {
    id: data.id,
    name: data.name,
    job: data.job === EJob.MANAGER ? 'Manager' : 'Tech'
  }
}
