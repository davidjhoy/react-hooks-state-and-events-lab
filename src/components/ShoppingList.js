import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {

let myItems = [...items]
const [selected, setSelected] = useState("All")



function handleChange(e){
  const newVal = e.target.value
  setSelected(newVal)
  
}

if (selected !== 'All'){
  myItems = myItems.filter((item)=>{
    return item.category === selected
})}



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {myItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
