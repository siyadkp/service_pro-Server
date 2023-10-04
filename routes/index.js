var express = require('express');
var router = express.Router();
const usercontroller=require('../contoller/userController')
const connection=require('../DatabaseConnection/connectionToDatabase')


/* GET home page. */
router.get('/',usercontroller.dataFetchFromDatabase)

router.get('/add',usercontroller.insertDataToDatabse)

module.exports = router;
