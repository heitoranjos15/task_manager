export const customExceptions = {
  NO_AUTHORIZATION: {
    status: 401,
    message: 'You are not allowed to access this task'
  },
  NOT_FOUND: {
    status: 404,
    message: 'Task not found'
  },
  UNEXPECTED: {
    status: 500,
    message: 'Internal error'
  },
  BAD_REQUEST: {
    status: 403,
    message: 'Wrong body format'
  }
}
