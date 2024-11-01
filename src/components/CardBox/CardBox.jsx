import React from "react";
import students_data from "../../Assets/students_data";
import "./CardBox.css"
import Card from "../Card/Card";
import { ShopContext } from "../../Context";
import { useContext } from "react";

function CardBox(){
 
    const{select} = useContext(ShopContext);
const{search} = useContext(ShopContext)
   
 

    return(

    <div className="Cardbox">


{students_data.map((item)=>{
    if(search === "no"){
  ///////////////////////////////////////WHEN SEARCH IS NOT APPLICABLE///////////////
        if(select === item.status){
    
            return(
            <Card
            key={item.id}  pic = {item.image} name ={item.name}  skill={item.skill} email={item.email}
        />
        )
        }else if(select === "all"){
            return(
                <Card
                key={item.id}  pic = {item.image} name ={item.name}  skill={item.skill} email={item.email}
            />
            )
        }
  ///////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////WHEN SEARCH BAR IS USED/////////////////////////////////////////////////
    } else{
    
        if(item.name.toLowerCase().includes(search.toLowerCase())){
            return(
                <Card
                key={item.id}  pic = {item.image} name ={item.name}  skill={item.skill} email={item.email}
            />
            )
        }
      } 
    /////////////////////////////////////////WHEN SEARCH IS APPPLICALBE////////////////////////////////////////  
     

})}
    </div>
)

}

export default CardBox;