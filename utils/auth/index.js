const passport = require('passport');

const LocalStrategy = require('./strategies/local.startegy');

passport.use(LocalStrategy)
