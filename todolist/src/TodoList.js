import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task].sort());
      setTask('');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(t => t !== taskToDelete).sort());
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => handleDeleteTask(t)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
