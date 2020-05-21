
const { exec  } = require('../db/mysql_promise')

const getDataNum = ( state, keywords ) => {

    // 设置sql
    let sql = `
        select count(*) from blog_user where state=${state}
    `
    // root tool hello  --> t --> and user_name like '%t%'
    if (keywords) {
        sql += ` and user_name like '%${keywords}%' `
    }

    return exec(sql).then(data => {
        console.log(data)
        return data[0]['count(*)']
    })
}

const getListPage = (pageIndex, pageTotal, state=1, keywords) => {
    // 设置sql语句
    let sql = `
        select * from blog_user where state=${state} 
    `

    if (keywords) {
        sql += ` and user_name like '%${keywords}%' `
    }

    sql += `limit ${(pageIndex - 1) * pageTotal}, ${pageTotal}`

    return exec(sql).then(result => {
        // console.log(result)
        return result
    })
}

// delete || update state 1 可用 2 不可用
const changeUserState = (state, userId) => {

    const sql = `
        update blog_user set state=${state} where user_id=${userId}
    `
    return exec(sql).then(result => {
        console.log(result)
        return result.affectedRows >= 1
    })
}


const updateUserInfo = ( user_id, user_name, user_email ) => {
    const sql = `
        update blog_user set user_name='${user_name}',user_email='${user_email}' where user_id=${user_id}
    `

    return exec(sql).then(result => {
        return result.affectedRows >= 1
    })
}

const addUser = ( user_name, user_pass, user_email ) => {
    const sql = `
        insert into blog_user (user_name, user_pass, user_email) 
        values ('${user_name}', '${user_pass}', '${user_email}')
    `

    return exec(sql).then(result => {
        return result.affectedRows >= 1
    })
}

module.exports = {
    getDataNum,
    getListPage,
    changeUserState,
    updateUserInfo,
    addUser
}