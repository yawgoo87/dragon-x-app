import React from "react";
import { Tile } from "./Tile";

export const DragonList = ({ data, openDragonDataSheet }) => {
    return (
      <>
        <div style={{width: 'fit-content'}} className="heading">
          <h1 >🚀 Select the Dragon</h1>
          <p style={{textAlign: 'center'}}>Learn more about Dragon -  reusable <br/> spacecraft developed and manufactured by SpaceX</p>
        </div>
        
        <div className="tiles">
          {
            data.map(obj => <Tile 
              key={obj.id} 
              id={obj.id} 
              openDragonDataSheet={openDragonDataSheet} 
              image={obj.flickr_images[0]} 
              name={obj.name}
              description={obj.description}
              />)
          }
        </div>

          <div className="void-box"></div>
      </>

    );
  };
  