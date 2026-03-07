import React from "react";

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
      
      <h2>Abdul Rafay</h2>

      <div style={{display:"flex",gap:"20px"}}>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>

    </div>
  );
};

export default Navbar;