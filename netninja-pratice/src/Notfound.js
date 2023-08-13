import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="notFound">
            <h1>404</h1>
             <h3>Not Found</h3>
             <p>The resource requested cannot be found in this server!</p>
             <Link to="/">Back to home page</Link>
        </div>
     );
}
 
export default Notfound;