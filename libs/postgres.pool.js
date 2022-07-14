const { Pool } = require('pg');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUSer);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${cofig.dbHost}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
