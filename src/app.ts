import { fastify } from 'fastify';
import { UserControllerFactory } from './factories/user-controller-factory';

export const app = fastify();

//User
const userController = UserControllerFactory.create();
app.register( () => userController.create(app) );
app.register( () => userController.login(app) );
app.register( () => userController.delete(app) );
app.register( () => userController.update(app) );
