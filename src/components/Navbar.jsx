import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-12 bg-orange-100">
      <Link to="/" className="font-bold text-green-600 text-3xl">
        Living Faith International Church
      </Link>
      <div className="flex items-center text-2xl">
        <ul className="flex gap-20">
          <li>
            <Link to="/about" className="text-green-600 hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-green-600 hover:text-gray-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
