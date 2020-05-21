const { exec } = require('../db/mysql_promise')


const getList = (keywords, state) => {

    // sql

    // select * from blog_article --> 表中的全部数据
    // select article_title,article_content from blog_article
    // blog_article --> article_author_id 作者id  作者id  作者的名字

    let sql = `
        select 
           blog_article.article_id,
           blog_article.article_title,
           blog_article.article_content,
           blog_article.article_create_time,
           blog_user.user_name
        from
            blog_article
        join
            blog_user 
        on
            blog_user.user_id=blog_article.article_author_id
        where 
            blog_article.state=${state}
    `
    if (keywords) {
        sql += ` and blog_article.article_title like '%${keywords}%' `
    }

    return exec(sql).then(result => {
        return result
    })

}

const changeState = (id, state) => {

    const sql = `
        update blog_article set state=${state} where article_id=${id}
    `

    return exec(sql).then(result => {
        return result.affectedRows >= 1
    })

}

const getAuthorInfo = () => {
    const sql = `
        select user_id,user_name from blog_user where state=1
    `

    return exec(sql).then(result => {
        return result
    })
}

const addArticle = (article_title, article_content,article_author_id) => {
    const sql = `
        insert into blog_article (article_title, article_content, article_author_id) 
            values('${article_title}', '${article_content}', '${article_author_id}')
    `
    return exec(sql).then(result => {
        return result.affectedRows >= 1
    })

}
module.exports = {
    getList,
    changeState,
    getAuthorInfo,
    addArticle
}