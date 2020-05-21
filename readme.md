# vue + node 全栈开发

## Vue篇 


### vue cli的安装

**Node版本说明：**

最新版本的Vue Cli 需要Node 8.9 或者以上的版本，如果你的node版本低于这个版本，请自行升级。

如果你的电脑里其他的项目还需要使用node,那么可以使用nvm，让你的电脑里可以管理多个版本的node 。


**安装命令：** 

```
npm install -g @vue/cli 
```

> 也可以使用yarn安装，安装命令是`yarn global add @vue/cli`。

安装完成后可以使用如下的命令查看版本。

```
vue --version
```

> 如果在安装过程中下载速度比较慢，可以选择使用nrm来设置npm镜像源。

nrm 安装命令:

```
npm install -g nrm 
```

安装完成后可以使用如下的命令查看可用镜像源。

```
nrm ls 
```

可以通过下面的命令来调整镜像源。

```
nrm use 镜像源的名字
```

### 通过脚手架创建一个项目

如果想要通过脚手架创建一个项目，需要通过下面的命令。

```
vue create 项目名称
```

如果喜欢图形化界面，也可以通过下面的命令来创建。

```
vue ui 
```

### src 目录介绍

```
| - src
  |-- App.vue
  |-- main.js
  |-- assets
  |-- components
  |-- router 
  |-- store 
  |-- views 
```

src: 存放项目源码和引用的资源文件

src->assets: 存放项目中需要用到的资源文件，css、js、images等。

src->components: 存放vue开发中一些公共组件。

src->router: vue-router vue路由的配置文件。

src->store: 存放 vuex 的状态管理器。

src->App.vue: 使用标签`<route-view></router-view>`渲染整个工程的.vue组件。

src->main.js: vue-cli工程的入口文件。


### vue-router的使用 

**路由的基础配置:**

设置路由的代码应该写在src/router/index.js当中。

创建路由规则时，最少需要设置两个参数：path、component。

例如:

```js
  {
    path: '/',
    name: 'Home',
    component: Home
  },
```

其中name可以不进行设置，但是path和component却必须进行设置。

path 表示设置路由的地址。

name 是给路由起的名字。

component 表示当前路由地址对应的vue文件或者说vue组件。

**匹配路由规则的页面展示:**

当我们设置好了路由规则之后，却是需要设置一下路由匹配成功之后的渲染位置。

在合适的位置通过`<router-view />`进行渲染即可。

**子路由嵌套:**

下面是一段子路由嵌套的例子:

```js
{
    path: '/mytest',
    name: 'MyTest',
    component: MyTest
    children: [
      {
        path: 'haha',
        component: HaHa.vue
      }
    ]
  }
```

**页面当中设置路由跳转链接:**

如下:

```
<router-link to="地址"> 跳转 </router-link>
```

`router-link`在页面当中会被渲染为a标签。


### vuex 

适合于vue程序的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

核心概念：

* State 状态存储
* Getter 状态管理中的计算属性
* Mutation 更改状态 同步操作
* Action 异步操作、提交Mutation
* Module 模块

获取state：

```
this.$store.value
```

提交Mutation：

```
this.$store.commit(MutationName)
```

提交Action：

```
this.$store.dispatch(ActionName)
```

### Element ui 

Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库.

**安装:**

通过以下的命令进行安装:

```
npm install element-ui -S
```

完整引入：

main.js

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```



## Node篇 


### Express 环境安装 

**Node安装:**

可以在http://nodejs.cn网址进行下载安装。

**Express安装：**

> 安装express，可以选择两种方式，一种是单独安装，一种是直接通过生成器生成express项目。

执行下面的命令进行安装：

```
npm install express --save 
```

**Express生成器安装：**

使用下面的命令安装Express生成器:

```
npm install  express-generator -g
```

**创建项目:**

执行下面的命令创建一个express项目：

```
express 项目名称
```

创建好项目后，进入到项目目录，执行`npm install`来安装依赖。

执行下面的命令运行项目：

```
npm run start 
```

在浏览器当中输入`localhost:3000`就可以访问到express的主页。


### commonJS 规范 

导出：

```
let a = 10 
module.exports = a
```

引入：

```
let x = require('./a.js')
```



### 前后端交互流程模拟

基本流程：
* 用户在浏览器端输入请求地址
* server端接收请求
* server处理请求，返回数据
* 浏览器端根据数据进行渲染

**postman基本使用**

通过postman来模拟请求数据。

### Express中间件机制

中间件的使用：

```
app.use() 
```

express当中中间件接收的参数：

```
let testMiddle = (req, res, next) => {}
```






## MySQL篇

### 环境安装 

**直接安装MySQL：**

安装MySQL,可以选择从官网直接下载：https://dev.mysql.com/downloads/mysql/

Mac下安装方法可参考如下文章：

```
参考阅读：https://www.cnblogs.com/nickchen121/p/11145123.html
```

**安装MySQL 集成环境：**

通过安装集成环境，间接的安装MySQL

```
https://www.mamp.info/en/mac/
```

windows下安装集成开发环境：

```
https://www.xp.cn/
```

**可视化工具mysql workbench 的安装:**

```
https://www.mysql.com/downloads/
```

### 基本概念的介绍以及通过可视化工具操作数据库和数据表

* 数据库软件
* 数据库
* 数据表
* sql 语句





### mysql的基本操作

**插入数据:**

想要插入数据，可以按照下面的语法来进行插入:

```
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
```

例如:

```
INSERT INTO users (userName, passWord) VALUES('zhangsan','abc123');
```
**查找数据:**

查看数据，可以按照下面的语法进行查找：

```
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
```

例如:

```
-- 查看全部数据
SELECT * FROM userss;

-- 查看所有数据的用户名字段
SELECT userName FROM users;

-- 查看用户名为zhangsan的字段
SELECT * FROM users WHERE userName='zhangsan';

-- 查看id大于2的数据的所有字段
SELECT * FROM users WHERE id > 2;

-- 查看users表中的两条数据
SELECT * FROM users LIMIT 2;

-- 查看users表中的两条数据，从第2条数据开始查起
SELECT * FROM users LIMIT 1, 2;

-- 查看表中的两条数据从第一条数据开始查起
SELECT * FROM users LIMIT 2 offset 0;

```

> offset 从0开始。

> Limit 可以接收一个或者两个参数，参数必须是一个整数常量。如果给定一个参数，则表示返回数据的条数。如果给定两个参数，第一个参数指定第一个返回数据的偏移量，第二个参数为返回多少条数据。

**更新数据:**

想要更新一条数据，可以按照以下的语法来进行：

```
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

例如：

```
UPDATE users SET userName="xiaoming" where id=1;
```

**删除数据:**

删除数据的语法如下:

```
DELETE FROM table_name [WHERE Clause]
```

例如:

```
DELETE FROM users where id = 1 
```






## 工具篇

### Node 操作MySQL 

操作数据库所需要的信息：

```
host: 'localhost',  数据库的地址
user: 'root',       数据库的用户名
password: '123456', 数据库的密码
database: '数据库名'   要操作的数据库
port: 8889          要连接的数据库的端口号
```

操作数据库的步骤:

```
1. 引入mysql 
  let mysql = require('mysql')
2. 创建和数据库的连接
  let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    port: 8889
  })
3. 进行连接
  conn.connect() 
4. 创建sql语句
  const sql = ''
5. 执行sql语句，处理结果 
  conn.query(sql, (err, result) => {
    if (err) {// 如果存在错误 }
    // 如果没有错误
  })
6. 关闭数据库连接
  conn.end() 
```

### Node进行密码加密 

在项目中，为了防止拖库，我们不能再数据库中存储明文密码，需要对密码进行加密处理。
我们可以通过crypto模块进行密码加密。

首先我们可以通过下面的方法获得一个hash对象。

```js
const md5 = crypto.createHash('md5)
```

接下来需要更新hash的内容为指定内容,并且计算所有传入数据的hash摘要。

```js
md5.update('内容').digest('hex')
```

### jwt验证

在web开发当中，绝大多数客户端在向服务端发起请求时，都需要进行身份验证，只有验证通过，才会响应给客户端它所请求的数据。

但是因为Http是一种无状态的协议，它并不清楚到底是谁在访问应用。如果客户端进行访问，那么需要对用户名和密码进行验证，但是当再次请求时，依然需要验证一遍。

传统的验证方式：

在开发的时候会在用户请求登录验证通过之后，在服务端生成一条记录，在记录中可以记载登录的用户到底是谁，一般来说可以把这条记录存在session当中。之后把记录的id响应给客户端，客户端收到id后把id信息存储到cookie当中。

当客户端再次请求的时候，就携带cookie，然后服务端接收后验证一下cookie的信息，验证通过后则响应数据，否则不响应数据。


**jwt身份验证：**

jwt可以称之为`json web token`，使用token进行验证的时候不需要存储用户的登录记录，流程如下：

* 客户端进行登录请求，使用用户名和密码
* 服务端接收到请求，验证用户名和密码
* 验证成功之后，签发token，然后把token发送给客户端。
* 客户端接收token之后将token存储在cookie或者local storage中。
* 客户端在登录之后的每次请求都携带token。
* 服务端接收到请求，验证客户端携带的token。验证通过响应客户端请求的数据。

**token的组成：**

token由以下三部分组成：

* 头部 header
* 数据 payload 
* 签名 signature

> 每一个部分都是用“.”来进行分割

一般来说，头部内会包含使用的算法。
payload 里面包括的是token的具体内容。在具体内容当中包括标准字段和自定义字段。标准字段如下：

* iss：Issuer，发行者
* sub：Subject，主题
* aud：Audience，观众
* exp：Expiration time，过期时间
* iat：Issued at，发行时间

除了上面的字段以外，还可以添加一些自定义的字段。

最后一个部分当中主要包括加密之后的header和payload，以及加密之后的秘钥。

> 一般来说，使用jwt，我们应该关注的点有payload中存储的数据和过期时间，以及最后的加密使用的秘钥。

**签发jwt：**

安装jsonwebtoken模块：

```
npm install jsonwebtoken -S
```

在签发jwt之前，需要设置好秘钥和payload的内容：

```js
// 设置秘钥
const key = ">*Pl7!lo"

// 设置要存储的内容

const user_info = {
  user: "zhangsan",
  msg: "hello,world",
  exp: parseInt(Date.now() / 1000) + 10 * 60 
}
```

通过sign方法签发jwt，返回token：

```js
const token = jwt.sign(user_info, key)
```

**验证token：**

可以通过verify和秘钥来验证token：

```js
const result = jwt.verify(token,key)
```

## 总结

**Vue部分:**

* Vue脚手架
* Vue-router
* Vuex

**Node部分:**

* Express环境安装
* CommonJS规范
* PostMan模拟请求
* Express 如何接收和响应
* 中间件

**MySQL部分:**

* 环境的安装
* 数据库的基本概念
* workbench的使用
* mysql的基本操作

**工具部分:**

* Node操作mysql
* 密码加密
* jwt验证


## 项目篇

### 项目功能

后台管理系统模块：

* 登录
* 权限认证
* 权限检测
* 用户列表
* 模糊查询
* 编辑修改用户信息
* 删除用户
* 添加用户
* 用户列表分页
* 文章列表
* 添加文章
* 删除文章
* 恢复功能
* 根据标题进行文章模糊查询
* 根据作者名进行模糊查询
* ...

API接口列表：

* Admin
  + /login 
  + /auth

* User
  + /list
  + /del 
  + /update
  + /add

* Article
  + / 
  + /update
  + /author 
  + /add

数据库：

数据库初始密码为：123456
管理员账号:root 
管理员密码:abc123

数据库名称: blog 

数据表:

blog_admin 
  - admin_id 管理员id
  - admin_user 管理员账号
  - admin_pass 管理员密码

blog_article 
  - article_id 文章id
  - article_title 文章题目
  - article_content  文章内容
  - article_create_time 创建时间
  - article_author_id 作者id
  - state 文章状态

blog_user
  - user_id 用户id
  - user_name 用户名
  - user_pass 用户密码
  - user_email 用户邮箱
  - user_create_time 用户创建时间
  - state  用户账号状态