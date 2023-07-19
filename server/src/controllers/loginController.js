const users = require('../utils/users');

const authenticate = (email, password) => {
  let access = false;

  users.forEach(user => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  });
  return access;
};

module.exports = { authenticate };
