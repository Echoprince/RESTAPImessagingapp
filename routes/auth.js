const express = require('express')
const {body} = require('express-validator')
const authController = require('../controller/auth')

const user = require('../model/user')
const router = express.Router()

router.put('/signup',
[
body('email')
.isEmail()
.withMessage('invalid email, please insert a valid mail')
.custom((value, {req}) => {
    User.findOne({email: value})
    return then(userDoc => {
        if(userDoc){
            return Promise.reject('Email Already Exist')
        }
    })
}).normalizeEmail(), 
body('password')
.trim()
.isLength({min: 5}),
body('name')
.not()
.isEmpty()
], 
authController.signup
)



router.post('/login', authController.login)


module.exports = router