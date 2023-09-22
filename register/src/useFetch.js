import { useState, useEffect } from "react";

const useFetch = (url) => {
    const[data, setData] = useState("");
    const[invalid, setInvalid]= useState(null)

    useEffect(()=>
    {
        fetch(url)
       .then(res => {return res.json()})
       .then(data => {
        setData(data);
        setInvalid(false)
       })
    },[url])

    return {data, invalid};
}
 
export default useFetch;