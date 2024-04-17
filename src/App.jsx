import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    case "/contact":
      Component = Contact;
      break;
  }

  return (
    <>
      <Navbar />
      <div className="m-5 text-center">
        <Component />
      </div>
    </>
  );
}

export default App;
