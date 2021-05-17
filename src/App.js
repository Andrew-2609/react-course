import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';

const App = () => {
  // let message = 'Hello, World!';
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Study programming',
      completed: false
    },
    {
      id: '2',
      title: 'Read books',
      completed: true
    }
  ]);

  return (
    <div className="container">
      <Tasks/>
    </div>
  )
}

export default App;