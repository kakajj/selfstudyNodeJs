const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
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
        unique:true,
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
    },
    tokens: [{
        token: {
            type: String,
            required:true,
        }
    }]
})

userSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismysecret')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token;
}


userSchema.statics.findByCredential = async (email,pass) => {
    const user = await User.findOne({ email: email });

    if(!user){
        throw new Error('Unable to login..')
    }

    const isMatch = await bcrypt.compare(pass, user.password);

    if(!isMatch){
        throw new Error('Unable to login, pls check again..');
    }

    return user;

}
// Hash the password before saving
userSchema.pre('save',async function (next) {
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }
    
    next();
})
const User = mongoose.model('User', userSchema );

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
