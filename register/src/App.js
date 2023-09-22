import RegisterDetails from "./registerdetails";
import React from "react";
import Create from "./create";
import Success from "./success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./register";
import Navbar from "./navbar";
import Login from "./login";

function App() {
  // return (
  //   <div className="App">
  //    y
  //   </div>
  // );
 return(
  <Router>
    <Navbar/>
  <div className="signUp">


       {/* { register && <RegisterData  data={register}/>} */}
       {/* {failed && <p>Invalid Credentials</p>} */}
       
       <Routes>
       <Route  path="/" element={<Register/> }></Route>
     <Route path="/registerdetails" element={<RegisterDetails/>}>  </Route>
      {/* <Route path ="/create" element={ <Create/>}></Route>? */}
      <Route path="/success" element={<Success/>}> </Route>
     <Route path ="/login"element={ <Login/>}></Route>
            
       </Routes>
       </div>
  </Router> 
 )
}

export default App;
