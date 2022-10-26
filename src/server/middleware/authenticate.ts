import * as jwt from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }
  jwt.verify(token, process.env.TOKEN_SECRET as string, (error, user) => {
    if (error) {
      return res.sendStatus(403)
    }
    req.user = {
      id: user.id,
      name: user.name,
      job: user.job
    }
    next()
  })
}
