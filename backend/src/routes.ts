import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateEditalController } from './controllers/CreateEditalController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListEditalController } from './controllers/ListEditalController';
import { ListUserController } from './controllers/ListUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';


export const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUserController = new ListUserController();
const createEditalController = new CreateEditalController();
const listEditalController = new ListEditalController();

router.post('/users', createUserController.handle);

router.post('/editais', ensureAuthenticated, createEditalController.handle);

router.post('/login', authenticateUserController.handle);

router.get('/users', ensureAuthenticated, listUserController.handle)

router.get('/editais', ensureAuthenticated, listEditalController.handle)