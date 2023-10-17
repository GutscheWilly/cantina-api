import { fastify } from 'fastify';
import { UserControllerFactory } from './factories/user-controller-factory';
import { StudentControllerFactory } from './factories/student-controller-factory';
import { OrderControllerFactory } from './factories/order-controller-factory';

export const app = fastify();

//User
const userController = UserControllerFactory.create();
app.register( () => userController.create(app) );
app.register( () => userController.login(app) );
app.register( () => userController.delete(app) );
app.register( () => userController.update(app) );
app.register( () => userController.transaction(app) );

//Student
const studentController = StudentControllerFactory.create();
app.register( () => studentController.create(app) );
app.register( () => studentController.update(app) );

//Order
const orderController = OrderControllerFactory.create();
app.register( () => orderController.create(app) );
