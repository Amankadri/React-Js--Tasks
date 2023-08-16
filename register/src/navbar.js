import { Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <div className="navbar">
           <div className="btn">
        <Link to="/"> <button>Register</button></Link> 
         <Link to="/login">  <button>login</button></Link>
           </div>
        </div>
     );
}
 
export default Navbar;