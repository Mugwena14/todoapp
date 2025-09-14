import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  async function fetchTasks() {
    const res = await fetch('http://localhost:8000/api/tasks');
    const data = await res.json();
    setTodos(data);
  }

  

  async function deleteTask(id) {
  try {
    const res = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      // Remove the deleted task from local state immediately
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } else {
      console.error('Delete failed with status:', res.status);
    }
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}



  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={styles.hd}>
      <h1 className={styles.heading}>To Do App</h1>

      <p className={styles.fld}>
        <input
          className="text"
          type="text"
          placeholder="Type task here"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </p>

      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.task}{' '}
          <button onClick={() => deleteTask(todo.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default App;
