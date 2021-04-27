const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
const authHeader = req.get('Authorization')
if(!authHeader){
    // const error = new Error('Failed to Auhtenticate')
    // error.statusCode = 402
    // throw error
    req.isAuth = false
    return next()
}

const token = authHeader.split('')[1]
let decodedToken

try {

    decodedToken = jwt.verify(token, 'seseseseseses')
    
} catch (error) {
    // error.statusCode = 500
    // throw error
    req.isAuth = false
    return next()
}
if(!decodedToken){
    // const error = new Error('Failed to Decode')
    // error.statusCode = 402
    // throw error
    req.isAuth = false
    return next() 
}

req.userId = decodedToken.userId
req.isAuth = true
next()

} 