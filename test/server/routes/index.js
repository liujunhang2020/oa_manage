var express = require('express');
var router = express.Router();

const testMiddle = require('../middleware/test')

/* GET home page. */
router.get('/', testMiddle ,function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// localhost:3000/hello
router.get('/hello', (req, res, next) => {
  // req 请求  res 响应  next 

  // console.log("hello,world")

  // let info = req.query 
  // console.log(info.userName, info.passWord)


  let { userName, passWord } = req.query 

  console.log(userName, passWord)

  let result = {
    errno: 1,
    msg: "hello,world"
  }

  // 进行响应
  res.json(result)

})

router.post('/mypost', (req, res, next) => {

  let { userName, passWord } = req.body

  console.log(userName, passWord)

  res.json(req.body)


})

module.exports = router;
