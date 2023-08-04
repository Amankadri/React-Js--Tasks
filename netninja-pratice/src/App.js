// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.youtube.com/";
  // const aman = [{name: "aman", age: "20"}];   react doesn't allows object values;
  //const popo = true;     Same goes for boolean values in react
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
        <h1>{title} </h1>
        <p>Liked {likes} times</p>
        <a href={link}>Youtube</a>
        <p>{Math.random() * 10}</p>
      </div>

    </div>
  );
}

export default App;
