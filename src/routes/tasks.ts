import { FastifyInstance } from 'fastify';
import { knex } from '../db';
import { z } from 'zod';
import { randomUUID } from 'crypto';

export async function taskRouter(app: FastifyInstance) {
app.get('/', async () => {
    const tasks = await knex('tasks').select();

    return { tasks }
});

app.get('/:id', async (request) => {
    const getTaskParamansSchema = z.object({
        id: z.string().uuid(),
    });

    const { id } = getTaskParamansSchema.parse(request.params);

    const task = await knex('tasks').where('id', id).first();

    return { task }
});

app.post('/', async (request, reply) => {
    const createTaskBodySchema = z.object({
        tarefa: z.string(),
        prioridade: z.string(),
    })

    const { tarefa, prioridade } = createTaskBodySchema.parse(request.body);
     
    await knex('tasks').insert({
        id: randomUUID(),
        tarefa,
        prioridade,
    })

    return reply.status(201).send()

});

}
  
