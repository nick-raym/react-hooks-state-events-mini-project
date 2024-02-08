import React from "react";
import Task from "./Task";

function TaskList({tasks,deleteThis}) {
  

  return (
    <div className="tasks">
      {tasks.map((task,index)=><Task key={index} task={task} category={task.category} text={task.text} deleteThis={deleteThis}/>)}
    </div>
  );
}

export default TaskList;
