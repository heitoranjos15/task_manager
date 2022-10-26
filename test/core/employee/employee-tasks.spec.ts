import * as employeeTask from '../../../src/core/employee/employee-tasks'
import * as listTask from '../../../src/core/task/list-task'
import { employeeManager, employeeTech } from '../../mocks/employee-mock'
import { taskMock } from '../../mocks/task-mock'

describe('/core/employee/employee-tasks', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('/getEmployeeTask', () => {
    it('should return task', async () => {
      jest.spyOn(listTask, 'getTaskById').mockResolvedValueOnce(taskMock)

      expect(await employeeTask.getEmployeeTask(0, employeeTech)).toEqual(taskMock)
    })

    it('should return employee task when a manager are requesting', async () => {
      jest.spyOn(listTask, 'getTaskById').mockResolvedValueOnce(taskMock)

      expect(await employeeTask.getEmployeeTask(0, employeeManager)).toEqual(taskMock)
    })

    it('should throw error because task isnt from the same employee', async () => {
      const taskFromOtherEmployee = { ...taskMock, employee: { id: 99, name: 'invalid', job: taskMock.employee.job } }

      jest.spyOn(listTask, 'getTaskById').mockResolvedValueOnce(taskFromOtherEmployee)
      expect(employeeTask.getEmployeeTask(0, employeeTech)).rejects.toEqual(Error('NO_AUTHORIZATION'))
    })
  })

  describe('/getEmployeeTaskList', () => {
    it('should return employee task', async () => {
      jest.spyOn(listTask, 'getTasksByEmployee').mockResolvedValueOnce([taskMock])

      expect(await employeeTask.getEmployeeTaskList(employeeTech)).toEqual([taskMock])
    })

    it('should throw error telling employee has no tasks', async () => {
      jest.spyOn(listTask, 'getTasksByEmployee').mockResolvedValueOnce([])

      expect(employeeTask.getEmployeeTaskList(employeeTech)).rejects.toEqual(Error('NOT_FOUND'))
    })
  })

  describe('/getAllTasks', () => {
    it('should return all tasks', async () => {
      jest.spyOn(listTask, 'getTasks').mockResolvedValueOnce([taskMock])
      expect(await employeeTask.getAllTasks(employeeManager)).toEqual([taskMock])
    })

    it('should throw error telling employee has no permition', async () => {
      const mockGetTasks = jest.spyOn(listTask, 'getTasks')

      expect(employeeTask.getAllTasks(employeeTech)).rejects.toEqual(Error('NO_AUTHORIZATION'))
      expect(mockGetTasks).not.toBeCalled()
    })
  })
})
