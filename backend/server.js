import express from 'express';
const app = express();
const PORT = 8000;
import errorHandler from './middlewares/error.js';
import logger from './middlewares/logger.js';
import notFound from './middlewares/notFound.js';

// Parsers
app.app(express.json());
app.app(express.urlencoded({extended: false}));

// Logger
app.use(logger)

// Routes
app.use('/', tasks);

// Errors
app.use(errorHandler);
app.use(notFound)

// Running server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));