import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir no mundo "real" - apenas para testes
router.get('/', userController.index); // listar os utilizadores
router.get('/:id', userController.show); // lista utilizador

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update); // para atualizar apenas os seus dados precisa de loginRequired
router.delete('/', loginRequired, userController.delete); // para apagar apenas os seus dados precisa de loginRequired

export default router;

/*

index -> lista todos os utilizadores -> GET
store/create -> cria um novo utilizador -> POST
delete-> apaga um utilizador -> DELETE
show -> mostra um utilizador -> GET
update -> atualiza um utilizador -> PATCH ou PUT

*/
