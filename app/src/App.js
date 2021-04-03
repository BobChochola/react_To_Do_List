import React, { useState } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


// import './App.css';

// const name = 'Bob';
// const x = true;



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
         id: 1,
         text: 'Dotors Appointment',
         day: 'Feb 5th at 2:30pm',
         reminder: true,
    },
    {
         id: 2,
         text: 'Meeting at School',
         day: 'Feb 6th at 1:30pm',
         reminder: true,
    },
    {
         id: 3,
         text: 'Food Shopping',
         day: 'Feb 7th at 2:30pm',
         reminder: false,
    },
  ])
  
  //Delete Task
  const deleteTask = (id) => {
    console.log(id)

    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }
  
  //Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}


export default App;

{/* <h1>Hello Wold</h1>
      <h2>hello wold {name}</h2>
      <h3>plus:  {1 + 1}</h3>
      <h4>true and false: {x ? 'Yes' : 'No'}</h4> */} 