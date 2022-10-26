import * as jwt from 'jsonwebtoken'
import { getEmployeeByLogin } from '../../core/employee/employee-find'


export const employeeLogin = async (req: any, res, next) => {
  const { username, password } = req.body
  try {
    const employee = await getEmployeeByLogin(username, password)
    const token = jwt.sign(employee, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION })
    res.json({ token: `Bearer ${token}` })
  } catch (error) {
    next(error)
  }
}


