import React from "react";
import "./Navbar.css"
import profile from "../../Assets/profile_photo.jpg"
import { ShopContext } from "../../Context";
import { useContext } from "react";

function Navbar(){
  const{search} = useContext(ShopContext)
  const{Startsearch} = useContext(ShopContext)

  function update(event){
    const name = event.target.value;
    Startsearch(name);
  }
return(
<div className="navbar">

    <div className="navbar-search">
    <input onChange={update}   type="text" placeholder="Search by Name" />
    </div>
    
    <div className="navbar-profile">
      <img src={profile} alt="profile" />
        <h1>Parth Patel</h1>
        </div>
    
    </div>
)
    
    
}

export default Navbar;