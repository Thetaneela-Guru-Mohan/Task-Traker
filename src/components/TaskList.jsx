import React from "react";

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.dueDate}</td>
            <td>{task.status}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => updateTask(task)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
