const crypto = require('crypto')

// md5加密
function md5(content) {
  const md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

const key = 'KjAo>>??'

// 加密函数
function genPassWord(password) {
  const str = `password=${password}&key=${key}`
  // console.log(str)
  return md5(str)
}

console.log(genPassWord('abc123'))

module.exports = {
  genPassWord
}