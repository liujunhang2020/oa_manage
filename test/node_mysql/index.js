const mysql = require('mysql')

// 设置配置信息
const config = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'mytest2',
  port: 8889
}

// 创建数据库连接
const conn = mysql.createConnection(config)

// 发起连接
conn.connect() 

// 设置sql语句
const sql = 'select * from users'

// 执行sql语句
conn.query(sql, (err, result) => {
  if (err) {
    console.log('错误:', err)
    return 
  }
  console.log(result)
})

// 关闭连接
conn.end()