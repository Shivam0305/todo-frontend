import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from API
    setTasks([
      { id: 1, title: 'Sample Task', description: 'Sample Description', dueDate: '2024-11-20', status: 'To Do' },
    ]);
  }, []);

  const handleDelete = (id) => {
    // API call to delete task
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Link to="/add-task">Add New Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            <Link to={`/edit-task/${task.id}`}>Edit</Link>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
