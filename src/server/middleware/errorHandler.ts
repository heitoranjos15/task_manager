import { customExceptions } from '../../exception'
export const errorHandler = (err, req, res, next) => {
  const { message } = err
  const customError = customExceptions[message]
  if (customError) {
    res.status(customError.status).json({ message: customError.message })
  } else {
    console.error('/errorHandler', err)
    res.status(500).json({ message: 'Unexpected error' })
  }

  next()
}
