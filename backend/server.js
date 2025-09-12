import express from 'express';
const app = express();
const PORT = 8000;

// Routes
app.use('/', tasks);

// Running server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));