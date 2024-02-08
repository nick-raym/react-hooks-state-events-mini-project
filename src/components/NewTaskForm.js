import React,{useState} from "react";

function NewTaskForm({cats,taskSub}) {
  const [taskText,setTaskText]=useState("")
  const [cat,setCat]=useState("")
  const handleSub = (event) => {
    event.preventDefault()
    const newTask = { text: taskText, category: cat }; 
    taskSub(newTask);
  }
  const handleCatChange= (event)=>{
    setCat(event.target.value)
  }
  const handleTextChange= (event)=>{
    setTaskText(event.target.value)
  }
  return (
    <form className="new-task-form" onSubmit={handleSub}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={cat} onChange={handleCatChange}>
          {cats.map(category => (<option key={category} >{category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
