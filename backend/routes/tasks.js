import express from 'express';
const router = express.Router();


let tasks = [
    {id: 1, task: 'Task One'},
    {id: 2, task: 'Task Two'},
    {id: 3, task: 'Task Three'},
    {id: 4, task: 'Task Four'},
    {id: 5, task: 'Task Five'},
];

// Getting tasks and with their limits
router.get('/', );

// Getting tasks by their id
router.get('/:id', );

// Creating task
router.post('/', );

// Updating tasks
router.put('/:id', );

// Deleting user
router.delete('/:id', );

export default router;