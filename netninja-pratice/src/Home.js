const Home = () => {
    const handleClick= () =>
    {
        console.log("Hello")
    }

    const handleClickAgain= (name) =>
    {
        console.log("Hello" + name)
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
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
        </div>
     );
}
 
export default Home;