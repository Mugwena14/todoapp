import asyncHandler from 'express-async-handler';
import Task from '../models/tasksModel.js';

// let tasks = [
    // {id: 1, task: 'Task One'},
    // {id: 2, task: 'Task Two'},
    // {id: 3, task: 'Task Three'},
    // {id: 4, task: 'Task Four'},
    // {id: 5, task: 'Task Five'},
// ];


// desc Get all tasks and by limits
// route GET /api/tasks || ?limit=number
export const getTasks = asyncHandler( async (req, res) => {
    const tasks = await Task.find();

    const lim = parseInt(req.query.limit);
    const newTasks = tasks.slice(0, lim);
    if(lim > 0){
        return res.status(200).json(newTasks);
    } res.status(200).json(tasks);
})

// desc Get task by id
// route GET /api/tasks/:id
export const getTaskById = asyncHandler( async (req, res) => {
    const id = req.params.id;
    
    const task = await Task.findById(id);

    if(!task){
        res.status(404);
        throw new Error(`Task of id: ${id} not found.`);
    } res.status(200).json(task);
})

// desc Create a task
// route POST /api/tasks
export const createTask = asyncHandler( async (req, res) => {
    if(!req.body.task){
        res.status(400);
        throw new Error(`Please enter task`);
    } 

    const createdTask = await Task.create(req.body);
    
    res.status(201).json(createdTask);
})

// desc Update a task
// route PUT /api/tasks/:id
export const updateTask = asyncHandler( async (req, res) => {
    const task = await Task.findById(req.params.id);

    if(!task){
        res.status(404);
        throw new Error(`Task of id: ${req.params.id} not found.`);
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true,});

    res.status(200).json(updatedTask);
})

// desc Delete a task
// route DELETE /api/tasks/:id
export const deleteTask = asyncHandler( async (req, res) => {
    const id = req.params.id;

    const task = await Task.findById(id);

    const deleteTask = await Task.findByIdAndDelete(id);

    if(!task){
        res.status(404);
        throw new Error(`Task of id: ${id} not found.`)
    } res.json({message: `id: ${id}`})
})