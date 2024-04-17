import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-600 text-white py-4">
      <div className="container mx-auto flex-col">
        <nav>
          <p className="text-2xl">Living Faith Internation Church</p>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100064546128370"
              className="text-3xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            {/* <a href="https://twitter.com/example" className="mr-4">
              <FontAwesomeIcon icon={faTwitter} />
            </a> */}
            {/* <a href="https://www.instagram.com/example">
              <FontAwesomeIcon icon={faInstagram} />
            </a> */}
          </div>
        </nav>
        <div>
          <p>9 Playfair Road, #04-01 Singapore 367992</p>
          <p>Email: livingfaith117@gmail.com | Phone: +65 9792 5030</p>
          <p>&copy; {new Date().getFullYear()} LFIC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
