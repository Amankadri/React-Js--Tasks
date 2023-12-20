import { lazy, Suspense } from 'react';
// import About from './About';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Service from './Service';
import Service1 from './Service1';
import Service2 from './Service2';
import React from 'react';

const About = lazy(() => import("./About"))

function App() {
  
  return (
   <Router>
     <div className="App">
     <Link to='/'><span>Home</span></Link>
     <Link to='/about' target='blank'><span>About</span></Link>
     <Link to='/services'><span>Service</span></Link>


     <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/about' element={<Suspense fallback= {<p>Loading</p>}> <About/> </Suspense>}></Route>
      <Route path='/services' element={<Service/>}> 
        <Route path='services/services1' element={<Service1/>}></Route>
        <Route path='services/services2' element={<Service2/>}></Route>
      </Route>
     </Routes>
     {/* <Home/> */}
     </div>
  </Router>
  );
}

export default App;
