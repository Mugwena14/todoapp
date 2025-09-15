import express from 'express';
const router = express.Router();
import { 
    getTaskById,
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from '../controllers/tasksController.js';




export default router;