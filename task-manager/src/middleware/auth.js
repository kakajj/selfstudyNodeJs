const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Authorization Funct 
const auth = async (req,res,next)=>{
    // make try catch for error handling easier
    try {
        // get the token from client's request header and remove the key name
        const token = req.header('Authorization').replace('Bearer ','')
        // use jasonwebtoken to verify the token and store it with varible
        const decoded = jwt.verify(token, 'thisismysecret')
        // then find user and store it from the token we have 
        // (tokens got 1._id and 2.token)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        // check if user is empthy or not
        if(!user){
            throw new Error();
        }
        // store user for router to use it later on
        req.token = token
        req.user = user ;

        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
} 

module.exports =  auth;