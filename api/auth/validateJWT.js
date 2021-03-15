const jwt = require('jsonwebtoken');
const model = require('../../models/user');

const segredo = 'seusecretdetoken';

module.exports = (requireAdmin) => {
  return async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
      res.status(400).json({ error: 'Token não encontrado ou informado' });
    }

    try {
      const decoded = jwt.verify(token, segredo);
      console.log(decoded)
      if (requireAdmin && !decoded.data.isAdmin) {
        res
          .status(200)
          .json(400, { error: 'Acesso negado. Você não tem permissão de admin'});
      }

      const user = await model.findUser(decoded.data.username);

      if (!user) {
        res.status(401).json({ message: 'Erro ao procurar usuario do token.' });
      }

      req.user = user;

      next();
    } catch (err) {
      return res.status(401).json({ message: 'Erro: Seu token é inválido' });
    }
  };
}