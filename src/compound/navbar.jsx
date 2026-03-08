import React from "react";

const Navbar = () => {
  return (
    <div style={{
  display:"flex",
  justifyContent:"space-between",
  padding:"20px 40px",
  background:"rgba(0,0,0,0.3)",
  backdropFilter:"blur(10px)"}}>
      
      <h2>Abdul Rafay</h2>

        <div style={{display:"flex", alignItems:"center", gap:"20px"}}>
        <a href="#home" style={{color:"white",textDecoration:"none"}}>Home</a>
        <a href="#about" style={{color:"white",textDecoration:"none"}}>About</a>
        <a href="#projects" style={{color:"white",textDecoration:"none"}}>Projects</a>
        <a href="#contact" style={{color:"white",textDecoration:"none"}}>Contact</a>
      </div>

    </div>
  );
};

export default Navbar;