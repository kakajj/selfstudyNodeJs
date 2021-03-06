const mongoose  = require('mongoose');
// const validator  = require('validator');
// const bcrypt = require('bcryptjs')


const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required:true,
        trim:true
    },
    completed: {
        type: Boolean,
        default:false
    }
})

// taskSchema.pre('save',async function(next){
//     const task = this;

//     if(task.isModified('password')){
//         task.password = await bcrypt.hash(task.password,8);
//     }
    
//     next();
// })

const Task = mongoose.model('user-tasks',taskSchema);



module.exports = Task;