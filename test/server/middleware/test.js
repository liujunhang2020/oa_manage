// express function 

let testMidlle = (req, res, next) => {
  console.log("===========中间件测试====================")
  // req 请求 用户从客户端传递过来的数据 
  let { userName, passWord } = req.query 

  if (userName === "root" && passWord === "abc123") {
    // next 继续执行
    next()
  }else {
    // res 响应 能够从服务端向客户端发起响应
    res.json({
      errno: 1,
      msg: "用户名或者密码错误"
    })
  }

}

module.exports = testMidlle