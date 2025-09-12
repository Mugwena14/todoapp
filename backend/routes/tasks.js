import express from 'express';
const router = express.Router();


// Getting tasks and with their limits
router.get('/', (req, res, next) => {
    const lim = parseInt(req.query.limit);
    const newTasks = tasks.slice(0, lim);
    if(lim > 0){
        return res.status(200).json(newTasks);
    } res.status(200).json(tasks);
});

// Getting tasks by their id
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const taskId = tasks.find((task) => task.id === id);

    if(!taskId){
        const error = new Error(`Task of id: ${id} not found.`);
        error.status = 404;
        return next(error);
    } res.status(200).json(taskId);
});

// Creating task
router.post('/', (req, res, next) => {
    const addedUser = {
        id: tasks.length + 1,
        task: req.body.task
    }

    if(!addedUser.task){
        const error = new Error(`Please enter task`);
        error.status = 400;
        return next(error);
    } res.status(201).json(tasks)
});

// Updating tasks
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const taskId = tasks.find((task) => task.id === id);

    if(!taskId){
        const error = new Error(`Task of id: ${id} not found.`);
        error.status = 404;
        return next(error);
    }

    taskId.task = req.body.task;

    if(!taskId.task){
        const error = new Error(`Please enter task`);
        error.status = 400;
        return next(error);
    } res.status(200).json(tasks);
});

// Deleting user
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const deletedTask = tasks.find((task) => task.id === id);
    const newUsers = tasks.filter((task) => task.id !== id)

    if(!deletedTask){
        const error = new Error(`Task of id: ${id} not found.`);
        error.status = 404;
        return next(error);
    } res.status(200).json(newUsers);
});