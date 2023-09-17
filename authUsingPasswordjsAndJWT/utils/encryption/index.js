const bcrypt = require('bcrypt');

async function encode(password) {
  return await bcrypt.hash(password, 10);
}

async function decode(password, hash) {
  return await bcrypt.compare(password, hash);
}

module.exports = {
  encode,
  decode,
};
