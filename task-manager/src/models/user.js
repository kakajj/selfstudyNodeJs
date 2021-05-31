const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('this email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minLength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('No "password" in password.');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            };
        }
    }
});

module.exports = User;

// const me = new User({
//     name: ' Andrew   ',
//     email: 'MYEMAIL@MEAD.IO  ',
//     password:'mamamiya12345',
//     age:20
// });

// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!', error);
// })
