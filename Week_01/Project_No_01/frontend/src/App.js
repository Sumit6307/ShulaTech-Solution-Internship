// frontend/src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  }, []);

  const addTask = async (task) => {
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', task);
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${updatedTask._id}`,
        updatedTask
      );
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id ? response.data : task
        )
      );
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
