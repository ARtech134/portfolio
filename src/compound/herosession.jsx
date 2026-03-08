import React from "react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div  id ="hero" style={{textAlign:"center",padding:"80px"}}>
      
      <h1>Hello, I'm Abdul Rafay 👋</h1>


  <h2>
        <ReactTyped
  strings={[
    "React Developer",
    "Frontend Developer",
    "JavaScript Developer"
  ]}
  typeSpeed={60}
  backSpeed={40}
  loop
/>
      </h2>

      <p>
        I build modern and responsive websites using React, JavaScript,
        HTML and CSS.
      </p>

      <button style={{padding:"10px 20px",marginTop:"20px"}}>
        View My Projects
      </button>

    <a href="/resume.pdf" download>
  <button style={{padding:"10px 20px",marginTop:"20px",marginLeft:"10px"}}>
    Download Resume
  </button>
</a>

    </div>
  );
};

export default Hero;