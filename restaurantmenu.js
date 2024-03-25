import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Restaurant_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.28475216724439&lng=76.64010163396597&restaurantId=" ;


const Restaurantmenu = () => {
  const params = useParams();
  const [restaurant, setrestaurant] = useState({});


  useEffect(() => {
    getRestaurantinfo();
  }, []);

  async function getRestaurantinfo() {
    const data = await fetch(Restaurant_URL+params.id);
    const json = await data.json();
    console.log(json.data);
    setrestaurant(json.data);
  }
  return (
    <>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurant?.cloudinaryImageId
        }/>
      
    </>
  );
};

export default Restaurantmenu;
