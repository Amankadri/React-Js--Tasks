import { useState, useEffect } from "react";

const useFetch = (url)=>
{
    const [data, setData]= useState(
        //     [
        //     { title: 'My new website', body: 'lorem ipsum....', author: 'Aman', id:'1'},
        //     { title: 'Welcome party', body: 'lorem ipsum....', author: 'Batman', id:'2'},
        //     { title: 'Web dev top tips', body: 'lorem ipsum....', author: 'Aman', id:'3'}
        // ]
       null )
    
       const[isLoading, setisLoading]= useState(true)
       const[error, setError]= useState(null)

    useEffect(()=> 
    {
        setTimeout(() => {
            fetch(url)
        .then(res =>{
           
            if(!res.ok)
            {
                throw Error('could not fetch the error of that resource');
            }
            return res.json();
        })
        .then( data =>
            {
                setData(data);
                setisLoading(false);
                setError(null);
            })
        .catch(err =>
            {
                setisLoading(false);
                setError(err.message);   
            })    
        }, );
             
    },[url])

    return{data, isLoading, error}
}

export default useFetch;