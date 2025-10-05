export default function TaskCard({ task, onDone, onDelete }) {
  return (
    <div className="task-card">
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.description || "No description"}</p>
      </div>
      <div className="task-buttons">
        <button onClick={onDone}>Done</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
