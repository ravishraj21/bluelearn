import React from 'react'
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram } from "react-icons/fa";

export default () => {
  return(
    <div className="footer">
      <div className="footer-icons">
        <a><FaGithub/></a>
        <a><FaLinkedin/></a>
        <a><FaFacebook/></a>
        <a><FaInstagram/></a>
      </div>
     <div className="footer-content"> &copy; Designed by Logic Tech</div>
    </div>
  )
}