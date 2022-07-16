const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('../config/config');

const UserService = require('./user.service');
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.mailerEmail,
        pass: config.mailerPassword,
      },
    });

    await transporter.sendMail({
      from: config.mailerEmail,
      to: `${user.email}`,
      subject: 'Recovery password',
      text: 'Hey there, this mail is to recover your password',
      html: `<h1>Hey there, this mail is to recover your password</h1>`,
    });

    return { message: 'Mail sent' };
  }
}

module.exports = AuthService;
