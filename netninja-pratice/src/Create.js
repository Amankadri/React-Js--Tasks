import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
   const [author, setAuthor] = useState('aman')
   const [isLoading, setisLoading] = useState(false)
   const navigate = useNavigate();
   
   const handleSubmit = (e) =>{
      e.preventDefault();
      const blog = {title, body, author};
      console.log(blog);

      setisLoading(true)

      fetch('http://localhost:8000/blogs', {
        method: "Post",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(()=> {
        console.log('new blog added')
        setisLoading(false);
        navigate('/')
      })
      
   }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <label >Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label >Blog Author:</label>
                <select
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)} >
                    <option value="aman">Aman</option>
                    <option value="batman">Batman</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button>Adding Blog....</button>}
                 {/* <p>{title}</p>
                     <p>{body}</p>
                     <p>{author}</p> */}
            </form>
          
        </div>
     );
}
 
export default Create;