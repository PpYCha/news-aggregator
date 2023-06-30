import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faFacebookSquare,
  faGithub,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-evenly bg-slate-100">
        <div className="  ">
          <p className="font-extrabold text-2xl ">About</p>
          <div>
            <p className="text-sm mt-2">About Us</p>
          </div>
        </div>
        <div>
          <p className="font-extrabold text-2xl ">Support</p>
          <div>
            <p className="text-sm mt-2">Contact Us </p>
          </div>
        </div>
        <div className=" ">
          <p className="font-extrabold text-2xl ">Stay Connected</p>
          <div>
            <div className="flex flex-col">
              <a
                href="https://www.facebook.com/diasandiaz0307"
                className="text-sm mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  size="2xl"
                  icon={faFacebookSquare}
                  style={{ color: "#213454", marginRight: 4 }}
                />
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/diasan-jr-diaz/"
                className="text-sm mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  size="2xl"
                  icon={faGithubSquare}
                  style={{ color: "#213454", marginRight: 4 }}
                />
                Linkedln
              </a>
              <a
                href="https://github.com/PpYCha"
                className="text-sm mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  size="2xl"
                  icon={faLinkedin}
                  style={{ color: "#213454", marginRight: 4 }}
                />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:justify-center space-x-4 bg-slate-700 p-2">
        <p className="text-slate-200">©2023 PpYCha</p>
      </div>
    </footer>
  );
};

export default Footer;
