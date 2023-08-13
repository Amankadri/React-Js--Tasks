import {useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id }= useParams();
    const {data: blog, error, isLoading}= useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate();
    
    const handleClick= () =>
    {
      fetch('http://localhost:8000/blogs/' + blog.id, {
       method: 'DELETE'
      }).then(()=>{
        navigate('/')
      })
    }
    return ( 
        <div className="blogDetails">
          { isLoading && <div>Loading....</div>}
          { error && <div>Error</div>}
          { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete Blog</button>
            </article>
          )}
        </div>
     );
}
 
export default BlogDetails;