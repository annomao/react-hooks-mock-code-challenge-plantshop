import React, {useState} from "react";

function PlantCard({plant}) {
  const {name ,image ,price} = plant

  let [soldOut ,setSoldOut] = useState(true)

  function handleStockClick(){
    setSoldOut(()=> soldOut = !soldOut)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button className="primary" onClick={handleStockClick}>In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
