import express from 'express';
const app = express();
const PORT = 8000;
import errorHandler from './middlewares/error.js';
import logger from './middlewares/logger.js';
import notFound from './middlewares/notFound.js';
import tasks from './routes/tasks.js';

// Parsers
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger
app.use(logger)

// Routes
app.use('/api/tasks', tasks);

// Errors
app.use(errorHandler);
app.use(notFound);

// Running server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));