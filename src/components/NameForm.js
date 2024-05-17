import React from "react";

function NameForm(){
    
    const [name, setName] = React.useState('');

    const change = (e) => {
        setName(e.target.value);
    }

    const showAlert = ()=>{
        alert(name);
    }

    return(
        <>
        <form>
            <input type="text" onChange={change}/>
            <button onClick={showAlert}>送信</button>
        </form>
        </>
    )

}

export default NameForm