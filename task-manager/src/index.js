const express = require('express');
const app = express();
const port = process.env.PORT || 3000
require('./db/mongoose.js')
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port..' + port);
});




// const jwt = require('jsonwebtoken')

// const myFunc = async () => {
//    const token =  jwt.sign({ _id : 'abc123' }, 'thisismynewcourse' , {expiresIn: '7 days'});
//    console.log(token);

//    const payload =  jwt.verify(token,'thisismynewcourse')
//    console.log(payload)
// }

// myFunc()



// Encryption Password By bcryptjs

// const bcrypt = require('bcryptjs')

// const myFunc = async () => {
//     const pass = '123456abc?!'
//     const hashPassword =  await bcrypt.hash(pass,8);
//     console.log(pass);
//     console.log(hashPassword);

//     const isMatch = await bcrypt.compare('123456abc?!',hashPassword);
//     console.log(isMatch);

// }

// myFunc()