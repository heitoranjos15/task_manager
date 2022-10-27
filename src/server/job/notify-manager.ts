import * as redisClient from '../services/redis'
import { publishToQueue } from '../services/rabbitmq'

export const jobNotifyTaskCreated = async () => {
  const tasks = await redisClient.getList('notify-task')
  await Promise.all(tasks.map(async (task) => {
    const { id, datePerformed, employee } = JSON.parse(task)
    await notifyTaskCreated(id, datePerformed, employee.name)
  }))
  await redisClient.deleteKey('notify-task')
}

const notifyTaskCreated = async (taskId: number, datePerformed: string, owner: string) => {
  const notifyMessage = `The Tech ${owner} performed task ${taskId} on date ${datePerformed}`
  console.log('sending message to notify-task', { taskId, owner })
  await publishToQueue('notify-task', notifyMessage)
}
