import * as employeeCore from '../../core/employee/employee-tasks'

export const employeeTaskList = async (req: any, res) => {
  res.json(await employeeCore.getEmployeeTaskList(req.user))
}

export const employeeTask = (req: any, res) => {
  res.json(employeeCore.getEmployeeTask(req.params.id, req.user))
}

export const allTasks = (req: any, res) => {
  res.json(employeeCore.getAllTasks(req.user))
}

export const editEmployeeTask = (req: any, res) => {
  res.json(employeeCore.editEmployeeTask(req.params.id, req.body, req.user))
}

export const deleteEmployeeTask = (req: any, res) => {
  res.json(employeeCore.deleteTask(req.params.id, req.user))
}
