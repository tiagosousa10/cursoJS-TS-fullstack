import User from '../models/User';

class UserController {
  // store
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] }); // mostrar apenas estes dados
      // console.log('USER ID', req.userId);
      // console.log('USER EMAIL', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user; // mostrar apenas estes dados
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Utilizador não existe'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados; // retornar so o id,nome,email
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Utilizador não existe'],
        });
      }
      await user.destroy;
      return res.json(null); // utilizador apagado, nao precisa de retornar dados... logo = null
    } catch (e) {
      return res.json(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
