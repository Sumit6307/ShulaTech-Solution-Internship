// frontend/src/components/Task.js
import React from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
  const handleCheckboxClick = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxClick}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default Task;
