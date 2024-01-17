import { app } from './app';
import { fastifyCors } from '@fastify/cors';

app.register(fastifyCors, {
  origin: '*',
});

app.listen({ 
  port: 3333 
}).then( () => console.log('Running!') );
