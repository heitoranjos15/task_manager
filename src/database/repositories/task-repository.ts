import db from '../models'

const taskModel = db.Task
const employeeModel = db.Employee

export const findTaskById = async (id: number, employeeId?: number) => {
  const queryFields = employeeId ? { id, employeeId } : { id }
  return taskModel.findOne({ include: [{ model: employeeModel }], where: queryFields })
}

export const findTasksByEmployee = async (employeeId: number) => {
  return taskModel.findAll({ include: [{ model: employeeModel }], where: { employeeId } })
}

export const findAllTask = async () => {
  return taskModel.findAll({ include: [{ model: employeeModel }] })
}

export const createTask = async (summary: string, datePerformed: Date, employeeId: number) => {
  return taskModel.create({ summary, datePerformed, employeeId })
}

export const editTask = async (id: number, data: any) => {
  return taskModel.update({ datePerformed: data.datePerformed, summary: data.summary }, { where: { id } })
}

export const deleteTask = async (id: number) => {
  return taskModel.destroy({ where: { id } })
}
