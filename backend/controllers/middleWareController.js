

const jwt = require('jsonwebtoken');

const middleWareController = {
    // verify token
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            })
        } else {
            res.status(401).json('You are not authenticated')
        }
    },
    // verify token and admin auth
    verifyTokenAndAdminAuth: (req, res, next) => {
        middleWareController.verifyToken(req, res, () => {
            if (req.user.id == req.params.id || req.user.admin) {
                next();
            } else {
                res.status(403).json("You are not allowed to delete other")
            }
        })
    }
}
module.exports = middleWareController;