import * as redisClient from '../../helper/redis'

export const jobNotifyTaskCreated = async () => {
  const tasks = await redisClient.getList('notify-task')
  tasks.map((task) => {
    const { id, datePerformed, employee } = JSON.parse(task)
    notifyTaskCreated(id, datePerformed, employee.name)
  })
  await redisClient.deleteKey('notify-task')
}

const notifyTaskCreated = (taskId: number, datePerformed: string, owner: string) => {
  console.log(`The Tech ${owner} performed task ${taskId} on date ${datePerformed}`)
}
