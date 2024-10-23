import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Invalidas'],
      });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['Utilizador não existe'],
      });
    }

    if (!(await user.passwordIsValida(password))) {
      return res.status(401).json({
        errors: ['Senha Invalida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

export default new TokenController();
