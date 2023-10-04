// dataFetchFromDatabase.js
const sql = require('../DatabaseConnection/connectionToDatabase');

const dataFetchFromDatabase = async (req, res) => {
  try {
    const results = await new Promise((resolve, reject) => {

      sql.query('SELECT * FROM student', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.json({ student: results.recordset });
  } catch (error) {
    res.status(500).json({ errMessage: error.message });
  }
};


const insertDataToDatabse = async (req,res)=> {

  try {
    
    sql.query("INSERT INTO student(studentName,age) VALUES('sahil','90')",(err,result)=>{
      if (err) {
     
      } else {
   
      }
    })
  } catch (error) {
    
  }
}
 

module.exports = { dataFetchFromDatabase,insertDataToDatabse };

