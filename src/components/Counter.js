import React from "react";

function Counter(){
    const [count, setCount] = React.useState(0);

    const increase = ()=>{
        setCount(count + 1);
    }

    return(
        <>
        <h1>{count}</h1>
        <button onClick={increase}>＋</button>
        </>
    )
}

export default Counter