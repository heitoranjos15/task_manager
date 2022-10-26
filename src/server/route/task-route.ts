import * as taskCore from '../../core/task/create-task'

export const createTask = async (req: any, res, next) => {
  const { summary, date } = req.body
  const result = await taskCore.createTask(summary, new Date(date), req.user).catch((err) => next(err))
  res.json(result)
}
