import { createClient } from 'redis'

export const client = createClient({ url: process.env.REDIS_URL })

client.on("connect", function() {
  console.log("You are now connected");
})

export const addList = async (collection: string, value: string) => {
  return client.sAdd(collection, value)
}

export const getList = async (collection: string) => {
  return client.sMembers(collection)
}

export const deleteKey = async (collection: string) => {
  return client.del(collection)
}
