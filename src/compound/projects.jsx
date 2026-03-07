import React from "react";

const Projects = () => {
  return (
    <div style={{padding:"60px",maxWidth:"900px",margin:"auto"}}>
      <h2>My Projects</h2>

      <div style={{display:"flex",gap:"20px",flexWrap:"wrap",marginTop:"30px"}}>

        {/* Project 1 */}
        <div style={{
          border:"1px solid #ccc",
          borderRadius:"10px",
          padding:"20px",
          flex:"1 1 300px"
        }}>
          <h3>Employee Management System</h3>
          <p>A React app to add, edit, and delete employees.</p>
          <a href="#" target="_blank">View Project</a>
        </div>

        {/* Project 2 */}
        <div style={{
          border:"1px solid #ccc",
          borderRadius:"10px",
          padding:"20px",
          flex:"1 1 300px"
        }}>
          <h3>Todo App</h3>
          <p>A simple React todo app with local storage.</p>
          <a href="#" target="_blank">View Project</a>
        </div>

        {/* Project 3 */}
        <div style={{
          border:"1px solid #ccc",
          borderRadius:"10px",
          padding:"20px",
          flex:"1 1 300px"
        }}>
          <h3>Weather App</h3>
          <p>React app fetching weather info from an API.</p>
          <a href="#" target="_blank">View Project</a>
        </div>

      </div>
    </div>
  );
};

export default Projects;