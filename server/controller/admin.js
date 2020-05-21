
const { exec } = require('../db/mysql_promise')
const adminLogin = ( userName, passWord ) => {

    const sql = `
        select * from blog_admin where admin_user='${userName}' and admin_pass='${passWord}';
    `

    return exec(sql).then(result => {
        console.log(result) // root abc123
        return result[0] || {}
    })


}

module.exports = {
    adminLogin
}