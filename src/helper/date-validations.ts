const isAlreadyDone = (date: Date): boolean => {
  const today = new Date()
  return date < today
}

export { isAlreadyDone }
