import { initPool } from './connection';

export default async function executeQuery(query) {
  const pool = initPool();
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(query);
    await connection.commit();
    return rows;
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    await connection.release();
  }
}
