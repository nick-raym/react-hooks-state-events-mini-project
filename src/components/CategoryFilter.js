import React,{useState} from "react";

function CategoryFilter({cats,handleCat}){
  //console.log(categories)
  const [selectedButton, setSelectedButton] = useState("All");
  const handleClick = (category) => {
    setSelectedButton(category);
    handleCat(category);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {cats.map(category => (
        <button className={selectedButton === category ? "selected" : ""} key={category} onClick={() => handleClick(category)} >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter;
