import { fastify } from 'fastify';
import { UserControllerFactory } from './factories/user-controller-factory';
import { StudentControllerFactory } from './factories/student-controller-factory';
import { OrderControllerFactory } from './factories/order-controller-factory';
import { ProductControllerFactory } from './factories/product-controller-factory';
import { OrderProductControllerFactory } from './factories/order-product-controller-factory';
import { ProductRestrictionFactory } from './factories/product-restriction-factory';

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
app.register( () => orderController.getAllFromUserId(app) );

//Product
const productController = ProductControllerFactory.create();
app.register( () => productController.create(app) );

//Order-Product
const orderProductController = OrderProductControllerFactory.create();
app.register( () => orderProductController.create(app) );

//Product-Restriction
const productRestrictionController = ProductRestrictionFactory.create();
app.register( () => productRestrictionController.create(app) );
