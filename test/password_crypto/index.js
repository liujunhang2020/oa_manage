const crypto = require('crypto')

const md5 = crypto.createHash('md5')

const info = md5.update('hello,world').digest('hex')

console.log(info)