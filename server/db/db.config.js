const path = require('path');
require('dotenv').config();

const sshConf = {
  host: process.env.SSH_HOST,
  port: process.env.SSH_PORT,
  user: process.env.SSH_USER,
  privateKey: require('fs').readFileSync(path.resolve(__dirname, 'bmart-3.pem')), //리눅스에서 ssh접속시 사용할 키!!
};

const dbConf = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

module.exports = { sshConf, dbConf };
