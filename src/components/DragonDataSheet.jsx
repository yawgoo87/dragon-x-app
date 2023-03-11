import React from "react";
import Slider from 'react-slick';
import '../styles/DragonDataSheet.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const DragonDataSheet = ({ data, clearCurrentDragonStatus }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }]
      };
    // Проверка на undefined
    if (data){
        return (
            <>
                <div className="slider">
                    <Slider {...settings}>
                        {/* {data.flickr_images.map((image) => (
                            <div key={data.flickr_images.indexOf(image)} className="slider-img" style={{backgroundImage: `url("${image}") !important`}}>1</div>
                        ))}  */}

                        {data.flickr_images.map((image) => (
                            <div key={data.flickr_images.indexOf(image)} className="wrap">
                                <div className="slider-img">
                                    <img src={image} alt="dragon-img"/>
                                </div>
                            </div>
                        ))} 
                    </Slider> 
                </div>   
                <div className="data-sheet-body">
                    <div >
                        <h2>{data.name}</h2>
                    </div>
                    <p>{data.description}</p>
                    <div className="link-block">
                        <a href={data.wikipedia} target="_blank" rel="noreferrer">Article on Wikipedia</a>
                    </div>
                    
                    <div className="info-table">
                        <table className="table">
                        <tbody>
                            <tr>
                                <td>First flight</td>
                                <td>{data.first_flight}</td>
                            </tr>
                            <tr>
                                <td>Height (meters)</td>
                                <td>{data.height_w_trunk.meters}</td>
                            </tr>
                            <tr>
                                <td>Diameter (meters)</td>
                                <td>{data.diameter.meters}</td>
                            </tr>
                            <tr>
                                <td>Dry mass</td>
                                <td>{data.dry_mass_kg}</td>
                            </tr>
                            <tr>
                                <td>Launch payload mass (kg)</td>
                                <td>{data.launch_payload_mass.kg}</td>
                            </tr>
                            <tr>
                                <td>Return payload mass (kg)</td>
                                <td>{data.return_payload_mass.kg}</td>
                            </tr>
                            <tr>
                                <td>Crew capacity</td>
                                <td>{data.crew_capacity}</td>
                            </tr>
                            <tr>
                                <td>Active</td>
                                <td>{data.active ? "Yes" : "No"}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div onClick={clearCurrentDragonStatus} className="go-back-button"><h2>Go back</h2></div> 
                </div>  
                

                
            </>
        ); 
    }
}