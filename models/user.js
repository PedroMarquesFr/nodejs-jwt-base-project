const connect = require('./connection');

const registerUser = async (username, password, isAdmin) =>
  connect().then((db) =>
    db.collection('users').insertOne({ username, password, isAdmin })
  ).then(result => result.ops[0].username ).catch(r=>console.log(r));

const findUser = async (username) =>
  connect().then((db) => db.collection('users').findOne({ username }));

module.exports = { registerUser, findUser };
