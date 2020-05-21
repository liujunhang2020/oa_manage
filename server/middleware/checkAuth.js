
const { verifyToken } = require('../utils/jwt')
const { TimeoutModel } = require('../model/resModel')


const checkAuth = (req, res, next) => {

    if (req.url !== '/admin/login') {

        const { token } = req.headers || ''

        const info = verifyToken(token)

        // err
        if (info === 'err') {
            res.json(new TimeoutModel()) // -2
            return
        }
    }

    next()

}

module.exports = {
    checkAuth
}