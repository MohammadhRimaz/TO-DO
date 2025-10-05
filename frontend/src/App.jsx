import { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "./components/TaskCard";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch latest 5 tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!title) return;
    try {
      await axios.post(API_URL, { title, description });
      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Mark task as completed
  const markDone = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}/done`);
      fetchTasks();
    } catch (error) {
      console.error("Error making task done:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <h1>TO-DO List</h1>

      <form onSubmit={addTask} className="task-form">
        <h3>Add a Task</h3>
        <input
          type="text"
          placeholder="Text title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Description (optional)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDone={() => markDone(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
