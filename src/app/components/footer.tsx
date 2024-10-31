import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";

import Image from "next/image";
import logo2 from "../../../image/logo2.png";

let Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-sec">
          <div className="list">
            <div className="logo2">
              <Image src={logo2} alt="logo"></Image>
            </div>
            <div className="Information">
              <h3 className="footer-heading">Information</h3>

              <ul>
                <li>
                  <a href="#MAIN">
                    <span className="hvr">Main</span>
                  </a>
                </li>
                <li>
                  <a href="#GALLERY">
                    <span className="hvr">Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="#PROJECTS">
                    <span className="hvr">Projects</span>
                  </a>
                </li>
                <li>
                  <a href="#CERTIFICATION">
                    <span className="hvr">Certification</span>
                  </a>
                </li>
                <li>
                  <a href="#CONTACTS">
                    <span className="hvr">Contacts</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="contacts">
              <h3 className="footer-heading">Contacts</h3>
              <div className="con-parah1">
                <p> 1234 Smaple Street</p>
                <p>Austin Texas 78704</p>
              </div>
              <div className="con-parah2">
                <p>512.333.2222</p>
                <p>sampleemail@gmail.com</p>
              </div>
            </div>

            <div className="social">
              <h3 className="footer-heading">Social Media</h3>
              <div className="icons2">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedin />
                <FaPinterestP />
              </div>
            </div>
          </div>
          <hr />
          <br />
          <p className="text-heading">© 2024 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
