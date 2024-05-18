import React, { useEffect } from "react";

function Child({setChildText}){
    const [text, setText] = React.useState("");

    const change = (e)=>{
        setText(e.target.value);
    }

    useEffect(()=>{
        setChildText(text);
    },[text]);

    return(
        <>
        <input type="text" onChange={change}/>
        </>
    )
}

export default Child