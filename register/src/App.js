// import './App.css';
import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Register from "./register";
import Login from "./login";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
    <div className="content">
   <Routes>
   <Route exact path="/" element={<Register/>}></Route>
   <Route  path="/login" element={<Login/>}></Route>
   </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
