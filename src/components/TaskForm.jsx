// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const TaskForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // API call to add/update task
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{id ? 'Edit Task' : 'Add Task'}</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={task.title}
//         onChange={(e) => setTask({ ...task, title: e.target.value })}
//         required
//       />
//       <textarea
//         placeholder="Description"
//         value={task.description}
//         onChange={(e) => setTask({ ...task, description: e.target.value })}
//       ></textarea>
//       <input
//         type="date"
//         value={task.dueDate}
//         onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
//         required
//       />
//       <button type="submit">{id ? 'Update Task' : 'Add Task'}</button>
//     </form>
//   );
// };

// export default TaskForm;


import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [task, setTask] = useState('');

  // Handle form field change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!task.trim()) {
      alert('Task title cannot be empty');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/tasks', { title: task });
      setTask('');
      fetchTasks(); // Refresh the task list after adding a new task
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

