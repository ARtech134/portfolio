import React from "react";

const Contact = () => {
  return (
    <div id = "contact" style={{padding:"60px",textAlign:"center"}}>
      <h2>Contact Me</h2>
      <p>You can reach me at:</p>

      <p>Email: <a href="mailto:abdulrafay@example.com">abdulrafay@example.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/abdulrafay" target="_blank">linkedin.com/in/abdulrafay</a></p>
      <p>GitHub: <a href="https://github.com/abdulrafay" target="_blank">github.com/abdulrafay</a></p>

      <form style={{marginTop:"30px",display:"flex",flexDirection:"column",gap:"10px",maxWidth:"400px",margin:"auto"}}>
        <input type="text" placeholder="Your Name" style={{padding:"10px"}} />
        <input type="email" placeholder="Your Email" style={{padding:"10px"}} />
        <textarea placeholder="Your Message" style={{padding:"10px"}} rows="4" />
        <button type="submit" style={{padding:"10px"}}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;