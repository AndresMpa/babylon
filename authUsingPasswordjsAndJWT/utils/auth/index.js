const passport = require('passport');

const LocalStrategy = require('./strategies/local.startegy');
const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy)
passport.use(JwtStrategy)
