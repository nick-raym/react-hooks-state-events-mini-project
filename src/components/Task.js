import React from "react";

function Task({task,category,deleteThis}) {
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task.text}</div>
      <button className="delete"  onClick={() => deleteThis(task)}>X</button>
    </div>
  );
}

export default Task;
