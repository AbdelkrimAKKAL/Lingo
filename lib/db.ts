import mysql from 'mysql2/promise';

let db: mysql.Pool;

declare global {
  var mysqlDb: mysql.Pool | undefined;
}

if (!global.mysqlDb) {
  global.mysqlDb = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

db = global.mysqlDb;
export default db;
