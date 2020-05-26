import { Router } from 'express';
import UserController from './app/controllers/UserController';
import RepositoryController from './app/controllers/RepositoryController';
const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.get('/tools', RepositoryController.index);
routes.post('/tools', RepositoryController.store);
routes.delete('/tools/:id', RepositoryController.delete);

export default routes;
