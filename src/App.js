import './App.css';
import React from "react";
import NavBar from './componentes/NavBar';
import About from './componentes/About';
import Skills from './componentes/Skills';
import Home from './componentes/Home';
import Work from './componentes/Work';
import Contact from './componentes/Contact';



function App() {
    return (
        <div>
            <NavBar/>
            <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
        </div>
      )
    }

export default App;
