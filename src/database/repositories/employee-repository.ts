import db from '../models'

const employeeModel = db.Employee

export const findEmployeeByLogin = async (username: string, password: string) => {
  try {
    return employeeModel.findOne({ where: { username, password } })
  } catch (error) {
    throw error
  }
}
