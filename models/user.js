// models/user.js
const db = require('./db');

const User = {
  getAll: () => {
    return db.select('*').from('users');
  },
  // Adicione outros métodos conforme necessário
};

module.exports = User;
