import React from "react";
import MultiplePizzas from "../assests/multiplePizzas.jpeg";
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      >
        
      </div>
      <div className="aboutBottom">
        <h1>About Us </h1>
        <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci voluptate, ipsam dignissimos neque vel harum, voluptates molestiae quam odit, saepe corporis aliquid? Fugit consequuntur architecto nam! Totam, eum minus?

        </p>
      </div>
    </div>
  );
}

export default About;
