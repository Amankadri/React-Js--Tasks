const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create" style ={{
                    color: "white",
                    backgroundColor: "Crimson",
                    borderRadius: "8px",  //Applying inline css in react
                }}>Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;