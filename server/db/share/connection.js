import mysql2 from 'mysql2/promise';

let db = null;

function initPool(dbConf) {
  if (!db) {
    db = mysql2.createPool(dbConf);
  }
  return db;
}

export { initPool };
