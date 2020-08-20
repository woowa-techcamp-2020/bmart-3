import { sshConf, dbConf } from '../share/db.config';
import { Client as SSH2Client } from 'ssh2';
import mysql2 from 'mysql2/promise';

const ssh = new SSH2Client();

async function getStream() {
  return await new Promise((resolve) => {
    ssh
      .on('ready', function () {
        ssh.forwardOut('127.0.0.1', 24000, dbConf.host, dbConf.port, async function (err, stream) {
          if (err) throw err;
          resolve(stream);
        });
      })
      .connect(sshConf);
  });
}

export default async function executeQuery(query) {
  try {
    dbConf.stream = await getStream();
    const pool = mysql2.createPool(dbConf);
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();
    return rows;
  } catch (err) {
    throw err;
  }
}
