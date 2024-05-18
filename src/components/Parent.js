import React, { useState } from "react";
import Child from "./Child";

function Parent(){
    const [childText, setChildText] = useState("");

    return(
        <>
        <Child setChildText={setChildText}/>
        <h1>{childText}</h1>
        </>
    )
}


export default Parent