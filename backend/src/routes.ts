import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListUserController } from './controllers/ListUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';


export const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUserController = new ListUserController();

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);

router.get('/users', ensureAuthenticated, listUserController.handle)