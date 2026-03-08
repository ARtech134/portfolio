import React from "react";

const About = () => {
  return (
    <div id="about" style={{padding:"60px",maxWidth:"800px",margin:"auto"}}>
      
      <h2>About Me</h2>
      <p>
        Hello! I'm Abdul Rafay, a passionate Frontend Developer who loves building
        interactive websites using React, JavaScript, HTML, and CSS.
      </p>

      <h2>My Skills</h2>

      <p>React</p>
      <div style={{background:"#ddd",borderRadius:"10px"}}>
        <div style={{width:"80%",background:"#ff7a18",padding:"5px",borderRadius:"10px"}}></div>
      </div>

      <p>JavaScript</p>
      <div style={{background:"#ddd",borderRadius:"10px"}}>
        <div style={{width:"75%",background:"#ff7a18",padding:"5px",borderRadius:"10px"}}></div>
      </div>

      <p>HTML / CSS</p>
      <div style={{background:"#ddd",borderRadius:"10px"}}>
        <div style={{width:"90%",background:"#ff7a18",padding:"5px",borderRadius:"10px"}}></div>
      </div>


    </div>
  );
};

export default About;