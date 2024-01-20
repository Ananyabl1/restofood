import React from "react";
import ReactDOM from "react-dom/client";
import img from "./i3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Title = () => (
  <img className="logo" alt="logo" src={img} />
);
const element = <FontAwesomeIcon icon={faStar} />
const Headersection = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        </div>
        <div>
            <input type="text"placeholder="search here"></input>
        </div>


      
    </>
  );
}
const Cakeroom={
  name:"The Cake Room",
  image:"https://lh3.googleusercontent.com/P9pJj5ldz_q3VdxB_XscwjvB31rdOVqnOC5qsyhFoIPB1fFzRar8c6lIMMol4IxjNdodHkMSDR-FDVfm_2bz6i-1G1I",
  rating:" 4.6 stars",
  icon: element ,
  cuisines:["Desserts"]

}
const Restaurantcard=()=>{
  return(
    <>
    <div className="card">
      <img className="cakeroom" src={Cakeroom.image}/>
      <h4>{Cakeroom.name}</h4>
      <h4>{Cakeroom.icon}{Cakeroom.cuisines}</h4>
      <h4>{Cakeroom.rating}</h4>
    
    </div>
    {/* <div className="card">
    <img className="cakeroom" alt="cakeroom" src="https://dhdnzx78tqry5.cloudfront.net/uploads/deal/thumb/19311.jpg" />
    <h4>Domino's pizza</h4>
    <h4>{ element } 4.6 stars</h4>
    <h4>Pizzas ,Italian pasta,Desserts</h4>
    
  </div>*/}
  </> 


  );
}
const Body=()=>{
  return(
    <>
    <div className="body">
      <Restaurantcard/>
      <Restaurantcard/>
      <Restaurantcard/>
      <Restaurantcard/>
      <Restaurantcard/>
      <Restaurantcard/>
      <Restaurantcard/>
      <Restaurantcard/>

    </div>
    </>
    

  );
}

const Footer=()=>{
  return
}
const Applayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Headersection/>
    <Body/>
  </React.StrictMode>
);
