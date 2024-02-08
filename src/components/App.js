import React,{useEffect, useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log(CATEGORIES, TASKS);

function App() {
  const [tasks,setTasks]=useState(TASKS)
  const categories = CATEGORIES;
  const [filteredCategory, setFilteredCategory] = useState("")
 
  console.log(tasks)
  const taskSub = (newTask) => { 
    setTasks([...filteredTasks, newTask]);
    
  }

  const handleCategoryFilter = (category) => { 
    setFilteredCategory(category); 
  };

  const handleDeleteTask = (deletedTask) => { // for <TaskList>
    const filteredTasks = tasks.filter(task => deletedTask.text !== task.text); // this one is weird
    setTasks(filteredTasks); // new tasks = current tasks - deleted task
  }


  let filteredTasks;
  if (filteredCategory === "All") { 
    filteredTasks = tasks; 
  } else if (filteredCategory) { 
    filteredTasks = tasks.filter((task) => task.category === filteredCategory); // return only selected tasks
  } else { 
    filteredTasks = tasks; 
  }
  
  

  
  
 

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter cats={categories}  handleCat={handleCategoryFilter} />
      <NewTaskForm cats={categories} taskSub={taskSub}/>
      <TaskList tasks={filteredTasks} deleteThis={handleDeleteTask}/>
    </div>
  )
}

export default App;
