import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    task: {type: String, required: true},
    name: {type: String, required: true, default: "Joe"}
});

const Task = mongoose.model("Task", taskSchema);

export default Task;