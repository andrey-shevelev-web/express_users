import Router from 'express';
import UserController from './UserController.js';

const userRouter = new Router();

userRouter.get('/users-all', UserController.getAll);
userRouter.get('/users', UserController.getPage);
userRouter.post('/users', UserController.getPage);

export default userRouter;
