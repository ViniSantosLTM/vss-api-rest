// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { knex } from 'knex'

declare module 'knex/types/tables' {
    export interface Tables {
      tasks: {
        id: string;
        tarefa: string;
        prioridade: string;
        created_at: Date;
      };
      
      /*users: {
        id: string;
        name: string;
        email: string;
        password: string;
        created_at: Date;
      };*/
    }
  }