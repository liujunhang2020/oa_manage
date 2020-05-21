var express = require('express');
var router = express.Router();


const { getList, changeState, getAuthorInfo, addArticle } = require('../controller/article')
const {SuccessModel, ErrorModel} = require('../model/resModel')

router.get('/list', function(req, res, next) {
    const { keywords, state } = req.query

    const result = getList(keywords, state)

    return result.then(data => {
        if (data) {
            res.json(new SuccessModel(data))
            return
        }
        res.json(new ErrorModel('失败'))
    })
});

router.get('/change', function(req, res, next) {
    const { id, state} = req.query

    const result = changeState(id, state)

    return result.then(data => {
        if (data) {
            res.json(new SuccessModel())
            return
        }
        res.json(new ErrorModel('失败'))
    })
})


router.get('/author', function(req, res, next) {
    const result = getAuthorInfo()

    return result.then(data => {
        if (data.length === 0) {
            res.json(new ErrorModel('暂无作者，请添加作者后重试'))
            return
        }
        res.json(new SuccessModel(data))
    })
})

router.post('/add', function(req, res, next) {
    const { article_title, article_content,article_author_id } = req.body
    const result = addArticle(article_title, article_content,article_author_id)

    return result.then(data => {
        if (data) {
            res.json(new SuccessModel())
            return
        }
        res.json(new ErrorModel('添加失败'))
    })
})
module.exports = router;
