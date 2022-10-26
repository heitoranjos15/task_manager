import { IEmployee } from "./types"
import { EJob } from '../../enum/job.enum'
import * as employeeRepository from '../../database/repositories/employee-repository'

export const getEmployeeByLogin = async (username: string, password: string): Promise<IEmployee> => {

  try {
    const result = await employeeRepository.findEmployeeByLogin(username, password)
    return formatEmployee(result)
  } catch (error) {
    console.log(error)
  }

}

export const formatEmployee = (data: any): IEmployee => {
  return {
    id: data.id,
    name: data.name,
    job: data.job === EJob.MANAGER ? 'Manager' : 'Tech'
  }
}
