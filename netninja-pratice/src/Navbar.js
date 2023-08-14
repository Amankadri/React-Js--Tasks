import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create" style ={{
                    color: "white",
                    backgroundColor: "Crimson",
                    borderRadius: "8px",  //Applying inline css in react
                }}>New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;