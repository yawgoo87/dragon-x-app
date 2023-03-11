import React from "react";
import '../styles/Tile.css';

export const Tile = ({ image, name, openDragonDataSheet, id, description }) => {
    return (
        <>
            <div className="tile" onClick={() => openDragonDataSheet(id)}>
                <div className="picture" style={{backgroundImage: `url("${image}")`}}></div>
                <div className="tile-text">
                    <h2>{name}</h2>
                    <p className="tile-description">{description}</p>
                </div>
            </div>
        </>
    );
};