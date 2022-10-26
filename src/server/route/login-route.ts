import * as jwt from 'jsonwebtoken'
import { getEmployeeByLogin } from '../../core/employee/employee-find'


export const employeeLogin = async (req: any, res) => {
  const { username, password } = req.body
  const employee = await getEmployeeByLogin(username, password)
  console.log(employee)
  const token = jwt.sign(employee, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION })
  res.json({ token: `Bearer ${token}` })
}


