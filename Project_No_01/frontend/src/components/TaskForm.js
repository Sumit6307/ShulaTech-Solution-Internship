// frontend/src/components/TaskList.js
import React, { useEffect } from 'react';
import Task from './Task';

const TaskList = ({ tasks, fetchTasks, onUpdate, onDelete }) => {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
