const mysql = require('mysql')

// 设置配置信息
const config = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog',
  port: 8889
}

// 创建连接 
const conn = mysql.createConnection(config)

// 创建一个执行sql语句的函数
function exec(sql) {
  return new Promise((resolve,reject) => {
    conn.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return 
      }
      resolve(result)
    })
  })
}

module.exports = {
  exec
}