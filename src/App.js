import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router,} from "react-router-dom";


function App() {
  const homeref = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Navbar
        onHomeClick={()=> scrollToSection(homeref)}
        onMenuClick={() => scrollToSection(menuRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <div id="homeSection" ref={homeref} >
      <Home 
      onAboutClick={() => scrollToSection(aboutRef)}
      onMenuClick={() => scrollToSection(menuRef)}
      />
      </div>
      <div id="menuSection" ref={menuRef}>
        <Menu />
      </div>
      <div id="aboutSection" ref={aboutRef}>
        <About />
      </div>
      <div id="contactSection" ref={contactRef}>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
