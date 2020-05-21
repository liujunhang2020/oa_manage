var express = require('express');
var router = express.Router();

const {getDataNum, getListPage, changeUserState, updateUserInfo,addUser} = require('../controller/user')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const { genPassWord } = require('../utils/crypto')

/* GET users listing. */ // /user/list
router.get('/list', async function (req, res, next) {
    let {pageIndex, keywords, state} = req.query
    console.log('pageIndex', pageIndex, 'keywords', keywords, 'state', state)

    pageIndex = pageIndex === 0 ? 1 : Math.abs(pageIndex) || 1

    let dataCount = 0

    const searchInfo = {
        pageNum: 1, // 一共有多少页数据
        result: []
    }

    const pageTotal = 3 // 每页显示多少数据

    // 查询一下当前的数据总条数
    dataCount = await getDataNum(state, keywords)
    console.log(dataCount)

    if (dataCount === 0) {
        res.json(new SuccessModel(searchInfo))
        return
    }

    searchInfo.pageNum = Math.ceil(dataCount / pageTotal)

    // pageIndex
    if (pageIndex > searchInfo.pageNum) {
        pageIndex = searchInfo.pageNum
    }

    searchInfo.result = await getListPage(pageIndex, pageTotal, state, keywords)

    res.json(new SuccessModel(searchInfo))
});
// user/del
router.get('/del', function (req, res, next) {

    const {id, state = 2} = req.query

    const result = changeUserState(state, id)

    return result.then(data => {
        if (data) {
            res.json(new SuccessModel())
            return
        }
        res.json(new ErrorModel('失败'))
    })
})

router.post('/update', function (req, res, next) {
  const { user_id, user_name, user_email } = req.body

  const result = updateUserInfo(user_id, user_name, user_email)

  return result.then(data => {
    if (data) {
      res.json(new SuccessModel())
      return
    }
    res.json(new ErrorModel('修改失败'))
  })
})

router.post('/add', function(req, res, next) {
    const { user_name, user_pass, user_email } = req.body

    console.log(user_name, user_pass, user_email)

    const newPass = genPassWord(user_pass)

    const result = addUser(user_name, newPass, user_email)

    return result.then(data => {
        if (data) {
            res.json(new SuccessModel())
            return
        }
        res.json(new ErrorModel('添加失败'))
    })
})

module.exports = router;
