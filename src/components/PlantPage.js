import React, { useState,useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  let [plants, setPlants]=useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => {
      setPlants(data)
    })
  },[])

  function onAddPlant(plant){
    let newPlants = [...plants,plant]
    setPlants(newPlants)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search />
      <PlantList plantList = {plants}/>
    </main>
  );
}

export default PlantPage;
