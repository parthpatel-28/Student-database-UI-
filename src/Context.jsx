import students_data from "./Assets/students_data";

import React, {createContext, useState} from "react";

export const ShopContext = createContext(null);

function ShopContextProvider(props){
/////////////////////////////////////////////////////////
    const[select , Setselect] = useState("all");
///////////////////////////////////////////////////////////

const[search , Startsearch] = useState("no")
/////////////////////////////////////////////////////

    const contextValue = {select , Setselect , search , Startsearch};

    return(
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
        
         )
        
}

export default ShopContextProvider;
