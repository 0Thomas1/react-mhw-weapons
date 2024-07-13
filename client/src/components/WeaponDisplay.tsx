import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import { selectRandomItems } from "../utils/arrayRandomize";
import WeaponCard from "./WeaponCard";
import { getJsonData } from "../utils/getJsonData";
interface Prop {
  weaponType: string;
}
const WeaponDisplay = ({weaponType}:Prop) => {
  const [weaponsList, setWeaponsList] = useState<any[]>([]);
  const [carouselWeapons, setCarouselWeapons] = useState<any[]>([]);
 
  useEffect(() => {
    if(weaponType === "") return;
   const fetchData = async () => {
    let data = await getJsonData(`/api/${weaponType}`);
    setWeaponsList(data);
    setCarouselWeapons(selectRandomItems(data, 5));
   
    
   }
    fetchData();
   
  },[weaponType])
 

  console.log("weaponsList " , weaponsList);


  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {carouselWeapons && carouselWeapons.length > 0 ? (
            carouselWeapons.map((weapon, index) => (
              
              <div className={index == 0 ? "carousel-item active":"carousel-item" } key={weapon.name}>
                <CarouselItem img={weapon.assets?.image} name={weapon.name} type={weapon.type} />
              </div>
            ))
          
          ): <h4 className="text-center my-3">Loading...</h4>}
          
        </div>
        <button
          className="carousel-control-prev btn-dark btn"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next btn-dark btn"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="displaySection"
        className="container d-flex flex-column justify-content-center"
      >
      
`      {weaponsList && weaponsList.length > 0 ? (
        weaponsList.map((weapon) => (
          <WeaponCard
            key={weapon.name}
            name={weapon.name}
            type={weapon.type}
            image={weapon.assets?.image}
          />
        ))
      ) : (
        <h4 className="text-center my-3">Loading...</h4>
      )}
      </div>
    </>
  );
};

export default WeaponDisplay;
