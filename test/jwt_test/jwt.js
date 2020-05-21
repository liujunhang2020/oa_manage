const jwt = require('jsonwebtoken')

// 设置秘钥
const key = 'key=><?L;*i{}['
// 设置过期时间 - 分钟
const exp_time = 10 

// 创建生成token的函数
const generateToken = data => {
  // 如果data不存在 
  if (!data) {
    console.log('数据不存在')
    return 
  }

  // 生成token
  return jwt.sign({
    data, 
    exp: parseInt( Date.now() / 1000 ) + exp_time * 60 
  }, key)
}

// 测试数据
let data = {
  user: "zhangsan",
  msg: "hello,world"
}

const token = generateToken(data)

// 创建一个解析token 的函数, 返回token是否过期 
const verifyToken = token => {
  // 如果没有传入token
  if (!token) {
    console.log("请传入token")
    return
  }
  let res; 
  try {
    const result = jwt.verify(token, key) || {} 
    // 判断是否过期 
    const current_time = parseInt(Date.now() / 1000) // 当前时间
    const { exp = 0 } = result // 获取token当中的过期时间
    // console.log(result)
    if (current_time <= exp) {
      res = result.data || {} 
    }
  }catch(error) {
    res = error
  }
  return res 
}

const res = verifyToken(token)
console.log(res)