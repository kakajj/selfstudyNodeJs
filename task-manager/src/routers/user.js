const express = require('express')
const User = require('../models/user')
const router = express.Router();


// router for sign-up 
router.post('/users/login',async (req,res)=>{
    try {
        const user = await User.findByCredential(req.body.email,req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token});
    } catch (e) {
        res.status(400).send();
    }
});


router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
       
        await user.save()
        const userWithToken = await user.generateAuthToken();

        res.status(201).send({user,userWithToken})
        
    } catch (error) {
        res.status(400).send(error);
    }

});

router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users);
    } catch (error) {
        res.status(400).send(error)

    }

});

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (error) {
        res.status(400).send(error);
    }

});

router.patch('/users/:id', async (req, res) => {
    const update = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValid = update.every((update) => allowedUpdates.includes(update))

    if (!isValid) {
        return res.status(400).send({
            error: 'invalid updates!'
        })
    }

    try {
        // if we use this code, when updating, the middleware like decryptjs cant work
        // cause mongoose bypass it 

        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true
        // })

        // so we need to dynamic update manualy after find it by ID...
        const user = await User.findById(req.params.id) 
        update.forEach((update)=> user[update] = req.body[update])
        await user.save();


        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send({
                error: 'Bad Request'
            })
        }
        res.send({
            user,
            status: 'Delete Complete'
        })

    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router;