import * as dotenv from 'dotenv'
import * as express from 'express'

import db from './database/models'
import { authenticateToken } from './server/middleware/authenticate'
import { errorHandler } from './server/middleware/errorHandler'
import * as employeeRoute from './server/route/employee-route'
import * as taskRoute from './server/route/task-route'
import * as loginRoute from './server/route/login-route'

import * as cron from 'node-cron'
import { client } from './helper/redis'
import { jobNotifyTaskCreated } from './server/job/notify-manager'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

app.post('/login', loginRoute.employeeLogin)

app.get('/employee/tasks', authenticateToken, employeeRoute.employeeTaskList)
app.get('/employee/task/:id', authenticateToken, employeeRoute.employeeTask)
app.get('/employee/allTasks', authenticateToken, employeeRoute.allTasks)
app.put('/employee/task/:id', authenticateToken, employeeRoute.editEmployeeTask)
app.delete('/employee/task/:id', authenticateToken, employeeRoute.deleteEmployeeTask)

app.post('/task', authenticateToken, taskRoute.createTask)

app.use(errorHandler)


db.sequelize.sync().then(async () => {
  app.listen(port, () => {
    console.log(`App listening port ${port}`)
  })
  await client.connect()
})

cron.schedule('*/10 * * * * *', async () => {
  try {
    await jobNotifyTaskCreated()
  } catch (error) {
    console.log(error)
  }
  console.log('running a task every 10 second')
})
