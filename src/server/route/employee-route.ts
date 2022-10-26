import * as employeeCore from '../../core/employee/employee-tasks'

export const employeeTaskList = async (req: any, res) => {
  res.json(await employeeCore.getEmployeeTaskList(req.user))
}

export const employeeTask = async (req: any, res) => {
  res.json(await employeeCore.getEmployeeTask(req.params.id, req.user))
}

export const allTasks = async (req: any, res) => {
  res.json(await employeeCore.getAllTasks(req.user))
}

export const editEmployeeTask = async (req: any, res) => {
  res.json(await employeeCore.editEmployeeTask(req.params.id, req.user, req.body))
}

export const deleteEmployeeTask = async (req: any, res) => {
  res.json(await employeeCore.deleteTask(req.params.id, req.user))
}
