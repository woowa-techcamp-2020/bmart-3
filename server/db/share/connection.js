import mysql2 from 'mysql2/promise';
import { dbConf } from '../share/db.config';

let db = null;

function initPool() {
  if (!db) {
    db = mysql2.createPool(dbConf);
  }
  return db;
}

export { initPool };
