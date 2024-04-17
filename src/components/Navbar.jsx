import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-12 bg-orange-100">
      <a href="/" className="font-bold text-green-600 text-3xl">
        Living Faith International Church
      </a>
      <div className="flex items-center">
        <ul className="flex gap-8">
          <li>
            <a href="/about" className="text-green-600 hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-green-600 hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
