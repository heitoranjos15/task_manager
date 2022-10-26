import db from '../models'

const taskModel = db.Task
const employeeModel = db.Employee

export const findTaskById = async (id: number, employeeId?: number) => {
  const queryFields = employeeId ? { id, employeeId } : { id }
  try {
    return taskModel.findOne({ include: [{ model: employeeModel }], where: queryFields })
  } catch (error) {
    throw error
  }
}

export const findTasksByEmployee = async (employeeId: number) => {
  try {
    return taskModel.findAll({ include: [{ model: employeeModel }], where: { employeeId } })
  } catch (error) {
    throw error
  }
}

export const findAllTask = async () => {
  try {
    return taskModel.findAll({ include: [{ model: employeeModel }] })
  } catch (error) {
    throw error
  }
}

export const createTask = async (summary: string, datePerformed: Date, employeeId: number) => {
  try {
    return taskModel.create({ summary, datePerformed, employeeId })
  } catch (error) {
    throw error
  }
}

export const editTask = async (id: number, data: any) => {
  try {
    return taskModel.update({ datePerformed: data.datePerformed, summary: data.summary }, { where: { id } })
  } catch (error) {
    throw error
  }
}
export const deleteTask = async (id: number) => {
  try {
    return taskModel.destroy({ where: { id } })
  } catch (error) {
    throw error
  }
}
