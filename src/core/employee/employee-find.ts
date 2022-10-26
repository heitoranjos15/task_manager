import { TasManagerkErrors } from '../../exception/taskManagerErrors'
import { IEmployee } from "./types"
import * as employeeRepository from '../../database/repositories/employee-repository'

export const getEmployeeByLogin = async (username: string, password: string): Promise<IEmployee> => {
  try {
    const result = await employeeRepository.findEmployeeByLogin(username, password)
    return {
      id: result.id,
      name: result.name,
      job: result.job
    }
  } catch (error) {
    console.error('/getEmployeeByLogin', error)
    throw Error(TasManagerkErrors.NOT_FOUND)
  }

}

