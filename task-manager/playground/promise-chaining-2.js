require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('606db9feb479870b0cb6b2cf').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed: false});
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


const deleteByIdAndCount = async (id) =>{
    const result = await Task.findOneAndDelete(id);
    return result;
}

deleteByIdAndCount('606db9dbb479870b0cb6b2ce').then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})