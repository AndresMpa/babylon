const { Strategy } = require('passport-local');
const { decode } = require('../../encryption');
const boom = require('@hapi/boom');

const UserService = require('../../../services/user.service');
const service = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(boom.unauthorized(), false);
      }

      const isMath = await decode(password, user.password);
      if (!isMath) {
        done(boom.unauthorized(), false);
      }

      delete user.dataValues.password;

      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
