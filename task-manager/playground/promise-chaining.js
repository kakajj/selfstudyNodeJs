require('../src/db/mongoose')
const User = require('../src/models/user')

// 606c3728eb0a2c1438fe839f

// User.findByIdAndUpdate('606c3728eb0a2c1438fe839f', {
//     age: 20
// }).then((user) => {
//     console.log(user);
//     return User.countDocuments({
//         age: 20
//     })
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age
    })
    const count = await User.countDocuments({
        age
    });
    return count;

}

updateAgeAndCount('60b4de90ded71f3cd44d538f', 40).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e);
})