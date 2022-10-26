import * as employeeCore from '../../core/employee/employee-tasks'

export const employeeTaskList = async (req: any, res, next) => {
  const result = await employeeCore.getEmployeeTaskList(req.user).catch((err) => next(err))
  res.json(result)
}

export const employeeTask = async (req: any, res, next) => {
  const result = await employeeCore.getEmployeeTask(req.params.id, req.user).catch((err) => next(err))
  res.json(result)
}

export const allTasks = async (req: any, res, next) => {
  const result = await employeeCore.getAllTasks(req.user).catch((err) => next(err))
  res.json(result)
}

export const editEmployeeTask = async (req: any, res, next) => {
  const result = await employeeCore.editEmployeeTask(req.params.id, req.user, req.body).catch((err) => next(err))
  res.json(result)
}

export const deleteEmployeeTask = async (req: any, res, next) => {
  const result = await employeeCore.deleteTask(req.params.id, req.user).catch((err) => next(err))
  res.json(result)
}
