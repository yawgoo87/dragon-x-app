import React from "react";
import { DragonDataSheet } from "./components/DragonDataSheet";
import { DragonList } from "./components/DragonList";
import './styles/App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

  const [dragonData, setdragonData] = React.useState([]);
  const [currentDragon, setCurrentDragon] = React.useState("none");

  React.useEffect(() => {
    fetch("https://api.spacexdata.com/v4/dragons")
      .then(res => res.json())
      .then(json => setdragonData(json))
      .catch(error => console.log(error.message))
  }, []);

  React.useEffect(() => {
    localStorage.setItem('dragonData', JSON.stringify(dragonData));
  }, [dragonData]);

  React.useEffect(() => {
    const dragonData = JSON.parse(localStorage.getItem('dragonData'));
    if (dragonData) {
      setdragonData(dragonData);
    }
  }, []);

  const openDragonDataSheet = (identifier) => {
    const res = dragonData.indexOf(dragonData.find(item => item.id === identifier));
    setCurrentDragon(res);
  }

  const clearCurrentDragonStatus = () => {
    setCurrentDragon("none");
  }

  return (
    <div className="main">
      {
        currentDragon === "none" ?
          (<DragonList data={dragonData} openDragonDataSheet={openDragonDataSheet}/>)
        :
          (
          <DragonDataSheet clearCurrentDragonStatus={clearCurrentDragonStatus} data={dragonData[currentDragon]} />
          )
          
      }
      
      <div style={{marginBottom: "10px", color: "gray"}}>GitHub: @yawgoo87</div>

    </div>
  );
}

export default App;
