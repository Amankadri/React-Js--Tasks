import React from 'react';
import {  Link, Outlet } from "react-router-dom";

function Service() {
  return (

    <div>
        <Link to='services/services1'>Service1</Link>
        <Link to='services/services2'>Service2</Link>

        <Outlet/>
        
    </div>
  )
}

export default Service