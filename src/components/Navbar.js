import React, {useState, useEffect} from 'react';
import SideBar from './SideBar';

const Navbar = (props) => {

  const [isActive, setActive] = useState(false);
  const [mobmenu, setMobmenu] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const toggleMobClass = () => {
    setMobmenu(!mobmenu);
  };


  useEffect(()=>{
    if (isActive) {
      // console.log('Active');
    }
    else
    {
      // console.log('In Active');
    }
  },[isActive]);

  window.onscroll = function () {
      var header_navbar = document.querySelector(".navbar-area");
      var sticky = header_navbar.offsetTop;

      if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
      } else {
          header_navbar.classList.remove("sticky");
      }

      // show or hide the back-top-top button
      var backToTo = document.querySelector(".scroll-top");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTo.style.display = "flex";
      } else {
          backToTo.style.display = "none";
      }
  };

  return (

      <section className="navbar-area navbar-nine">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/images/white-logo.svg" alt="Logo" />
                </a>
                <button className={`navbar-toggler ${isActive ? 'active': null}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                  aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMobClass}> 
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarNine">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#hero-area">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#services">Services</a>
                    </li>

                    <li className="nav-item">
                      <a className="page-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href={props.link}>{props.title}</a>
                    </li>
                  </ul>
                </div>

                <div className="navbar-btn d-none d-lg-inline-block">
                  <a className={`menu-bar ${isActive ? 'your_className': null}`} href="#side-menu-left" id="sideMenuBar" onClick={toggleClass}>
                    <i className="lni lni-menu"></i>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <SideBar activeClass={isActive ? 'open': null} tgl={toggleClass}/>
      </section>

  );
}

export default Navbar;