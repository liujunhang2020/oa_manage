const jwt = require('jsonwebtoken')

// 创建一个秘钥
const key = "__+?<>Qf1"

// 创建payload数据
const payload = {
  user: "zhangsan",
  msg: "hello,world",
  exp: parseInt(Date.now() / 1000) + 6 * 60
}

// 签发jwt
const info = jwt.sign(payload, key)

console.log(info)

const result = jwt.verify(info, key)
console.log(result)