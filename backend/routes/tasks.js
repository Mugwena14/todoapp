import express from 'express';
const router = express.Router();
import { 
    getTaskById,
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from '../controllers/tasksController.js';


// Getting tasks and with their limits
router.get('/', getTasks);

// Getting tasks by their id
router.get('/:id', getTaskById);

// Creating task
router.post('/', createTask);

// Updating tasks
router.put('/:id', updateTask);

// Deleting user
router.delete('/:id', deleteTask);

export default router;