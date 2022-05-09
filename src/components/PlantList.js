import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {

  const renderPlants = plantList.map((plant)=>{
    return <PlantCard plant={plant} key={plant.id}/>
  })
  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
