var express = require('express');
var router = express.Router();

const { SuccessModel, ErrorModel, TimeoutModel } = require('../model/resModel')
const { adminLogin } = require('../controller/admin')
const { genPassWord } = require('../utils/crypto')
const { generateToken, verifyToken } = require('../utils/jwt')
// /admin/login
router.post('/login', function(req, res, next) {

    const { userName, passWord } = req.body

    // console.log(userName, passWord)
    if (!userName || !passWord) {
        res.json(new ErrorModel("登录失败，用户名或者密码缺失"))
        return
    }
    const newPass = genPassWord(passWord)
    const result = adminLogin(userName, newPass)

    return result.then(data => {
        if (Object.keys(data).length === 0) {
            res.json(new ErrorModel('用户名或者密码错误'))
            return
        }
        // 进行token 的签发
        // npm install -S jsonwebtoken

        const token = generateToken(data.admin_user)

        res.json(new SuccessModel(token))

    })

});



module.exports = router;