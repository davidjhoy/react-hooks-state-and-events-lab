import React, {useState} from "react";
import reactDom from "react-dom";

function Item({ name, category }) {

  const [added, setAdded] = useState(false)

  function handleClick(){
    setAdded(!added)
  }


  return (
    <li className={added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={added?"remove":"add"} onClick = {handleClick}>{ added ? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
