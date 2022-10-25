import * as employeeTask from '../../../src/core/employee/employee-tasks'
import * as listTask from '../../../src/core/task/list-task'
import { employeeManager, employeeTech } from '../../mocks/employee-mock'
import { taskMock } from '../../mocks/task-mock'

describe('/core/employee/employee-tasks', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('/getEmployeeTask', () => {
    it('should return task', () => {
      jest.spyOn(listTask, 'getTaskById').mockReturnValueOnce(taskMock)

      expect(employeeTask.getEmployeeTask(0, employeeTech)).toEqual(taskMock)
    })

    it('should return employee task when a manager are requesting', () => {
      jest.spyOn(listTask, 'getTaskById').mockReturnValueOnce(taskMock)

      expect(employeeTask.getEmployeeTask(0, employeeManager)).toEqual(taskMock)
    })

    it('should throw error because task isnt from the same employee', () => {
      const taskFromOtherEmployee = { ...taskMock, employee: { id: 99, name: 'invalid', job: taskMock.employee.job } }

      jest.spyOn(listTask, 'getTaskById').mockReturnValueOnce(taskFromOtherEmployee)
      expect(() => employeeTask.getEmployeeTask(0, employeeTech)).toThrowError('You havent a permission')
    })
  })

  describe('/getEmployeeTaskList', () => {
    it('should return employee task', () => {
      jest.spyOn(listTask, 'getTasksByEmployee').mockReturnValueOnce([taskMock])

      expect(employeeTask.getEmployeeTaskList(employeeTech)).toEqual([taskMock])
    })

    it('should throw error telling employee has no tasks', () => {
      jest.spyOn(listTask, 'getTasksByEmployee').mockReturnValueOnce([])

      expect(() => employeeTask.getEmployeeTaskList(employeeTech)).toThrowError('You have no task')
    })
  })

  describe('/getAllTasks', () => {
    it('should return all tasks', () => {
      jest.spyOn(listTask, 'getTasks').mockReturnValueOnce([taskMock])
      expect(employeeTask.getAllTasks(employeeManager)).toEqual([taskMock])
    })

    it('should throw error telling employee has no permition', () => {
      const mockGetTasks = jest.spyOn(listTask, 'getTasks')

      expect(() => employeeTask.getAllTasks(employeeTech)).toThrowError('You havent a permission')
      expect(mockGetTasks).not.toBeCalled()
    })
  })
})
