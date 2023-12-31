import { useState, useEffect } from "react";
import BlogList from "./blog-list";
import useFetch from "./useFetch"; 

const Home = () => {
   
    const {data: blog, isLoading, error}= useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) =>{
    //     const newBlogs= blog.filter(blog => blog.id !== id);
    //     setBlog(newBlogs);

    // }
  const[fullname, setName]= useState('Aman');
  const[age, setAge]= useState(20);

    const handleClick= () =>
    {
        setName('Batman');
        setAge(30)
        console.log("Hello")
    }

    const handleClickAgain= (name) =>
    {
        console.log("Hello" + name)
    } 

    const [name, setFname]= useState('Aman')

    // useEffect(()=> 
    // {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //     .then(res =>{
           
    //         if(!res.ok)
    //         {
    //             throw Error('could not fetch the error of that resource');
    //         }
    //         return res.json();
    //     })
    //     .then( data =>
    //         {
    //             setBlog(data);
    //             setisLoading(false);
    //             setError(null);
    //         })
    //     .catch(err =>
    //         {
    //             setisLoading(false);
    //             setError(err.message);   
    //         })    
    //     }, );
             
    // },[])

    return ( 
        <div className="home">
              { isLoading && <div>Loading.....</div>}
                {error && <div>{error}</div>}

            <h1>Homepage</h1>
            <p>{fullname} is {age} years old  </p>
            <button onClick={handleClick} style ={{
                    color: "crimson",
                    backgroundColor: "white",
                    border: "1px solid crimson",
                    fontWeight: "600"
                }}>Click me</button>
            <button onClick={() =>
            {
                handleClickAgain(" Aman")
            }}>Click me again</button>
 
        {blog && <BlogList blogs={blog} title="All Blogs!" />}
        <button onClick={()=> setFname('Batman')}>Change name</button>
        <p>{name}</p>
        {/* <BlogList blogs={blog.filter((blog)=> blog.author==='Aman')} title="Aman's Blogs!"/> */}
        </div>

        
     );
}
 
export default Home;