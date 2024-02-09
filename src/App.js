import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [menuVisible, setMenuVisible] = useState(false);


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuClick = () => {
    setMenuVisible(false);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      const distanceToSkills = window.innerHeight - skillsSection.getBoundingClientRect().top;
      if (distanceToSkills >= 300) {
        const habilidades = document.querySelectorAll('.progreso');
        habilidades[0].classList.add('javascript');
        habilidades[1].classList.add('htmlcss');
        habilidades[2].classList.add('photoshop');
        habilidades[3].classList.add('wordpress');
        habilidades[4].classList.add('drupal');
        habilidades[5].classList.add('comunicacion');
        habilidades[6].classList.add('trabajo');
        habilidades[7].classList.add('creatividad');
        habilidades[8].classList.add('dedicacion');
        habilidades[9].classList.add('proyect');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="contenedor-header">
        <header>
          <div className="logo">
            <a href="#">Nick</a>
          </div>
          <nav id="nav" className={menuVisible ? 'responsive' : ''}>
            <ul>
              <li><a href="#inicio" onClick={handleMenuClick}>INICIO</a></li>
              <li><a href="#sobremi" onClick={handleMenuClick}>SOBRE MI</a></li>
              <li><a href="#skills" onClick={handleMenuClick}>SKILLS</a></li>
              <li><a href="#curriculum" onClick={handleMenuClick}>CURRICULUM</a></li>
              <li><a href="#portfolio" onClick={handleMenuClick}>PORTFOLIO</a></li>
              <li><a href="#contacto" onClick={handleMenuClick}>CONTACTO</a></li>
            </ul>
          </nav>
          <div className="nav-responsive" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </header>
      </div>

      

      <footer>
        <a href="#inicio" className="arriba">
          <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="redes">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-skype"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-solid fa-rss"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
