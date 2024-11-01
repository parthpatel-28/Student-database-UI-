import React from "react";
import pic from "../../Assets/profile_photo.jpg"
import "./Card.css"
function Card(props){

    
    return(
<div className="card">
            
            <div className="profile-pic">
                <img src={props.pic} alt="" />
            </div>
            
            
            <div className="card-info">
            <h2>{props.name}</h2>
            <h3>{props.skill}</h3>
            
            <p>{props.email}</p>
                
                <div className="card-buttons">
                <button className="button1">Block</button>
                <button className="button2">Details</button>
                </div>
            
            </div>


        </div>


    )
}

export default Card;