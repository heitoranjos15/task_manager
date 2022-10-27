import * as amqp from 'amqplib'

async function connect() {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue('notify-task');
    return channel
  } catch (error) {
    console.error(error);
  }
}

export const publishToQueue = async (queueName: string, content: string) => {
  const ch = await connect()
  ch.sendToQueue(queueName, Buffer.from(content), { persistent: true })
}
