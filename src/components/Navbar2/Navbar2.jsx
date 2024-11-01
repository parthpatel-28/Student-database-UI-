import React from "react";
import "./Navbar2.css";
import { useState } from "react";
import { ShopContext } from "../../Context";
import { useContext } from "react";

function Navbar2(){

const {Setselect} = useContext(ShopContext);
const {select} = useContext(ShopContext);
const{Startsearch} = useContext(ShopContext);

const[addClass , Setclass] = useState("all");

 function change(value){
Startsearch("no");
Setselect(value);
Setclass(value);
 }


    return(


<div className="navbar2">

    <div className="navbar-students">
    <h1>Students <hr/></h1>
        </div>
    
    <div className="navbar-categories">
      <ul className="nav-menu">
        <li onClick={()=> change("all")} className={addClass==="all"?"select":null} >ALL</li>
        <li  onClick={()=>change("active") } className={addClass==="active"?"select":null} >ACTIVE</li>
        <li  onClick={()=> change("inactive")} className={addClass==="inactive"?"select":null} >INACTIVE</li>
      </ul>
        </div>
    
    </div>
)
    
    
}

export default Navbar2;