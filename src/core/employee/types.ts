import { EJob } from '../../enum/job.enum'

export interface IEmployee {
  id: number
  name: string
  job: EJob | string
}

export interface ISuccess {
  id: number,
  message: string,
  result: string
}
