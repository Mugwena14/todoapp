import React from 'react'
import styles from './App.module.css'
import { useState } from 'react'

const App = () => {

  const [task, setTask] = useState('');
  const [lists, setLists] = useState(["Eat", "Jog", "Bath"]);


  function addTask(){

    setLists(l => [...l, task]);
    setTask("");
  }

  return (
    <div className={styles.hd}>
      <h1 className={styles.heading}>To Do App</h1>

        <p className={styles.fld}>

            <input 
            className="text"
            type="text" 
            placeholder='Type task here'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            /> 
            <button onClick={addTask}>Add</button>

        </p>

          <ul>
            {lists.map((list, index) => (
                <li key={index}>{list}</li>
            ))}
          </ul>
    </div>
  )
}

export default App