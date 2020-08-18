import { initPool } from './connection';
import { dbConf } from '../share/db.config';

export default async function executeQuery({ stream, query }) {
  try {
    dbConf.stream = stream;
    const pool = initPool(dbConf);
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();
    return rows;
  } catch (err) {
    throw err;
  }
}
