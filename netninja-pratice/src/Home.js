import { useState, useEffect } from "react";
import BlogList from "./blog-list";

const Home = () => {
   
    const [blog, setBlog]= useState([
        { title: 'My new website', body: 'lorem ipsum....', author: 'Aman', id:'1'},
        { title: 'Welcome party', body: 'lorem ipsum....', author: 'Batman', id:'2'},
        { title: 'Web dev top tips', body: 'lorem ipsum....', author: 'Aman', id:'3'}
    ])

    const handleDelete = (id) =>{
        const newBlogs= blog.filter(blog => blog.id !== id);
        setBlog(newBlogs);

    }
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

    useEffect(()=> 
    {
        fetch(' http://localhost:8001/blogs')
    },[])

    return ( 
        <div className="home">
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

        <BlogList blogs={blog} title="All Blogs!" handleDelete={handleDelete}/>
        <button onClick={()=> setFname('Batman')}>Change name</button>
        <p>{name}</p>
        {/* <BlogList blogs={blog.filter((blog)=> blog.author==='Aman')} title="Aman's Blogs!"/> */}
        </div>

        
     );
}
 
export default Home;