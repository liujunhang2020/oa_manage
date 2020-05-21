const jwt = require('jsonwebtoken')

// 设置秘钥
const key = "key=>?hello"

// 设置一下过期时间
const exp_time = 60 // 以分钟为单位

const generateToken = data => {
    if (!data) {
        console.log("数据不存在")
        return
    }

    return jwt.sign({
        data,
        exp: parseInt(Date.now() / 1000) + exp_time * 60
    },key)
}

const verifyToken = token => {
    if (!token) {
        console.log('请传入token')
        return
    }

    let res ;

    try {
        const result = jwt.verify(token, key) || {}
        const current_time = parseInt(Date.now() / 1000)
        const { exp=0 } = result

        if (current_time <= exp) {
            res = result.data || {}
        }else {
            res = 'err'
        }
    }catch (e) {
        res = 'err'
    }
    return res
}

module.exports = {
    generateToken,
    verifyToken
}