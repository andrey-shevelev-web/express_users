import Router from 'express';
import UserController from './UserController.js';

const userRouter = new Router();

userRouter.get('/users', UserController.getPage);
userRouter.get('/users-all', UserController.getAll);

export default userRouter;
