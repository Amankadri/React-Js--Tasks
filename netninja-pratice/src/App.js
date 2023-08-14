// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';


function App() {
  // const title = "Welcome to the new blog";
  // const likes = 50;
  // const link = "https//www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
       <Routes>
       <Route exact path="/" element={<Home/>}></Route>
       <Route path="/create" element={<Create/>}></Route>
       <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
       <Route path="*" element={<Notfound/>}></Route>
       </Routes>
      </div>

    </div>
    </Router>
  );
}

export default App;
