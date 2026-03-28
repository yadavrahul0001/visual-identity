import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content1">
        <h1>Connect On Social Media</h1>
        <img src="/images/fb.jpeg" alt="Facebook" className="social-icon" />
        <img src="/images/ln.jpeg" alt="LinkedIn" className="social-icon" />
        <img src="/images/in.jpeg" alt="Instagram" className="social-icon" />
        
      </div>
      <div className="content2">
        <div className="section1">
          <h2>Contact Us</h2>
          <div className="contact-info">
            HEAD OFFICE: 102, 2nd Floor, 8-9, Ansal Building, Near Chawla
            <br />
            Restaurant Lane, Dr. Mukherjee Nagar, Delhi-110009
            <br />
            Contact: +91 9953101176, +91 8700170483
            <br />
            Email: ravindrasiasdelhi@gmail.com
            <br />
            Website: www.Ravindrasias.com
            <br />
          </div>
          <div className="contact-info2">
            BRANCH OFFICE: 1st Floor, Krishna Tower, Phoolbagh Chauraha, Gwalior
            <br />
            Email: gwaliorravindrasias@gmail.com
            <br />
            Contact: 7042027486, 8359038350
            <br />
          </div>
        </div>
      </div>
      <div className="content3">
        <h2>Follow Us</h2>
      </div>
    </div>
  );
};

export default Footer;
