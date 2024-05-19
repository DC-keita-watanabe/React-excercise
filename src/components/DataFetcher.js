import React from "react";

const DataFetcher = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            if(!res.ok){
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((obj) => {
            setData(obj);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    },[]);

    if(loading){
        return <p>lodading...</p>
    }

    if(error){
        return <p>Error: {error.message}</p>;
    }

    console.log(data);
    return( 
        <ul>
            {data.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default DataFetcher