// connectionToDatabase.js
const sql = require('mssql/msnodesqlv8');

const sqlConfig = {
  user: 'sa',
  password: 'google',
  server: 'DESKTOP-58UQ1TM\\SQLEXPRESS',
  database: 'test',
};



const connectToDatabase = async () => {
  try {
    
     await sql.connect(sqlConfig);
     console.log('SQL Server connected.');
    
  } catch (err) {

    console.error('SQL Server connection error:', err);
    throw err;
  }
};
 
 connectToDatabase()
 
module.exports = sql
