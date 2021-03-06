const express = require('express')
const Task = require('../models/task');
const router = express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save()
        res.status(200).send(task)
    } catch (error) {
        res.status(400).send(error);
    }


});

router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.status(200).send(tasks)
    } catch (error) {
        res.status(404).send(error);
    }
});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id)
        if (!task) {
            res.status(404).send();
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const update = Object.keys(req.body);
    const allowedUpdate = ['completed', 'description'];
    const isValid = update.every((element) => allowedUpdate.includes(element));

    if (!isValid) {
        return res.status(400).send({
            error: 'invalid update!'
        })
    }

    try {
        const task = await Task.findById(req.params.id)
        update.forEach(key => task[key] = req.body[key])
        await task.save();
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true
        // })

        if (!task) {
            return res.status(404).send({
                error: 'Not Found'
            })
        }

        res.status(200).send(task)

    } catch (error) {
        res.status(400).send(error);
    }
});


router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send({
                error: 'Bad Request'
            })
        }
        res.send({
            task,
            status: 'Delete Complete'
        })

    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = router;