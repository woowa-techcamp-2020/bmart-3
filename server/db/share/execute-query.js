import { dbConf } from '../share/db.config';
import mysql2 from 'mysql2/promise';

export default async function executeQuery(query) {
  const pool = mysql2.createPool(dbConf);
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(query);
    connection.release();
    return rows;
  } catch (err) {
    connection.release();
    throw err;
  }
}
