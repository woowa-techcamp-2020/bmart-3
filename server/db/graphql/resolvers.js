import mysql2 from 'mysql2/promise';
import { dbConf } from '../share/db.config';

export default async function (stream) {
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
}
