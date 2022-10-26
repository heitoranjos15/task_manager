import * as taskCore from '../../core/task/create-task'

export const createTask = async (req: any, res) => {
  const { summary, date } = req.body
  res.json(await taskCore.createTask(summary, new Date(date), req.user))
}
