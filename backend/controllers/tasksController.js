
let tasks = [
    {id: 1, task: 'Task One'},
    {id: 2, task: 'Task Two'},
    {id: 3, task: 'Task Three'},
    {id: 4, task: 'Task Four'},
    {id: 5, task: 'Task Five'},
];


// desc Get all tasks and by limits
// route GET /api/tasks || ?limit=number
export const getTasks = (req, res, next) => {
    const lim = parseInt(req.query.limit);
    const newTasks = tasks.slice(0, lim);
    if(lim > 0){
        return res.status(200).json(newTasks);
    } res.status(200).json(tasks);
}

// desc Get task by id
// route GET /api/tasks/:id
export const getTaskById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const taskId = tasks.find((task) => task.id === id);

    if(!taskId){
        const error = new Error(`Task of id: ${id} not found.`);
        error.status = 404;
        return next(error);
    } res.status(200).json(taskId);
}

// desc Create a task
// route POST /api/tasks
export const createTask = (req, res, next) => {
    const addedTask = {
        id: tasks.length + 1,
        task: req.body.task
    }

    if(!addedTask.task){
        const error = new Error(`Please enter task`);
        error.status = 400;
        return next(error);
    } tasks.push(addedTask);
    res.status(201).json(tasks);
}

// desc Update a task
// route PUT /api/tasks/:id
export const updateTask = (req, res, next) => {
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
}

// desc Delete a task
// route DELETE /api/tasks/:id
export const deleteTask = (req, res, next) => {
    const id = parseInt(req.params.id);
    const deletedTask = tasks.find((task) => task.id === id);
    const newUsers = tasks.filter((task) => task.id !== id)

    if(!deletedTask){
        const error = new Error(`Task of id: ${id} not found.`);
        error.status = 404;
        return next(error);
    } res.status(200).json(newUsers);
}