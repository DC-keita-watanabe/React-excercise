import React from "react";

const useFetch = (url) => {
    const [data, setData] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((obj)=>{
            setData(obj);
            setLoading(false);
        });
    },[url])

    return [data, loading];
}

export default useFetch;