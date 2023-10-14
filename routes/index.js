var express = require('express');
var router = express.Router();
const usercontroller=require('../contoller/userController')
const connection=require('../DatabaseConnection/connectionToDatabase')
const emai=require('../userAuth/userAuth')

/* GET home page. */
router.get('/',usercontroller.dataFetchFromDatabase)

router.get('/add',usercontroller.insertDataToDatabse)

router.post('/continue with google')

router.post('/continue with apple')

module.exports = router;
