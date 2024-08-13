
// import { useEffect } from 'react';
import '../styling/Header.css';

function Header() {

        // useEffect(() => {
        //   const handleScroll = () => {
        //     const navbar = document.querySelector('.navbar');
        //     if(navbar)
        //     if (window.scrollY > 50) {
        //       navbar.classList.add('scrolled');
        //     } else {
        //       navbar.classList.remove('scrolled');
        //     }
        //   };
      
        //   window.addEventListener('scroll', handleScroll);
      
        //   return () => {
        //     window.removeEventListener('scroll', handleScroll);
        //   };
        // }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">Start Bootstrap</a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;