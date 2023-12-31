import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/harshp421" target="_blank">
        <div>
          <FaGithub />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/harsh-parmar-717834232/" target="_blank">
        <div>
          <FaLinkedin />
        </div>
      </a>

      <a href="https://www.instagram.com/harsh_js/" target="_blank">
        <div>
          <BsInstagram />
        </div>
      </a>

      <a href="http://" target="_blank">
        <div>
          <FaFacebook />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
