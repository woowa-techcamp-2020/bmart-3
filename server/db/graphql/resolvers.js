const mysql2 = require('mysql2/promise');
const { dbConf } = require('../db.config');

module.exports = async function (stream) {
  dbConf.stream = stream;
  const pool = mysql2.createPool(dbConf);
  const connection = await pool.getConnection();

  const getUsers = async () => {
    const [rows] = await connection.query('select * from user');
    return rows;
  };

  return {
    Query: {
      Users: () => getUsers(),
    },
  };
};
