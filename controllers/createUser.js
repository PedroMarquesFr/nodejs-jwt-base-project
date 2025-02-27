const Model = require('../models/user');

module.exports = async (req, res) => {
  try {
    const username = await Model.registerUser(
      req.body.username,
      req.body.password,
      req.body.isAdmin,
    );
    if (!username) throw Error;
    res.status(201).json({ message: 'Novo usuário', user: username });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};
