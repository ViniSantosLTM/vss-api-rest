import Fastify from 'fastify'
import { taskRouter } from './routes/tasks'
import { env } from './env';

const app = Fastify()

const PORT = env.PORT;


app.register (taskRouter,{
  prefix: '/task',
});

app.listen({
  port:3000,
}).then(() => {
  console.log(`Server listening on ${PORT}`)
})

