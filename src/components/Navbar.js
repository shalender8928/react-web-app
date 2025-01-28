import React, {useState, useEffect,useRef, useCallback} from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
// import {default as Navbar1} from 'react-bootstrap/Navbar';
import {Button,Nav} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import AuthProtected from '../util/AuthProtected';


const Navbar = (props) => {

  const [isActive, setActive] = useState(false);
  const [mobmenu, setMobmenu] = useState(false);

  const [cookies, , removeCookie] = useCookies();

  const toggleClass = () => {
    setActive(!isActive);
  };

  const toggleMobClass = () => {
    setMobmenu(!mobmenu);
  };


  /*useEffect(()=>{
    if (isActive) {
      // console.log('Active');
    }
    else
    {
      // console.log('In Active');
    }
  },[isActive]);*/

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

  const navigate = useNavigate();
  const logout = useCallback(() => {
    if (cookies.token) {
      removeCookie('token',{samesite:'Lax'});
      window.location.reload()
      navigate('/login');
    }
  },[cookies.token,navigate,removeCookie])

  const [data,setData] = useState([]);
  // const [navItemsmenu,setNavItemsmenu] = useState([]);
  let [navItems,setNavItems] = useState([]);
  const loggged = useRef(true);

  const  getData = () => {
    fetch('./jsonFiles/headermenu.json',{
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    })
    .then((res)=>{
      return res.json();
    })
    .then((resp)=>{
    // console.log('get json',resp);
      setData(resp);
    })
  }

  
  useEffect(()=>{
    if(navItems.length === 0)
    {
        if (loggged.current) {
          loggged.current = false;
          getData();
        }
        if(data)
        {
          // console.log(data)
          const navItems1 = (data) ? data.map((item,indx)=>   {
            if(item.auth === 1)
           {
          return(
                <AuthProtected>
                  <li className="nav-item flex items-center justify-center m-auto">
                    <Button className="btn-warning" onClick={logout}>Logout</Button>
                  </li>
                </AuthProtected>
                );
            }
            else
            {
              return (
                  <Nav.Item as="li" key={item.id}>
                    <Nav.Link eventKey={`link-${item.id}`} className="page-scroll" href={item.link} target={item.target}>{item.label}</Nav.Link>
                  </Nav.Item>
              );

            }
          }) : null;

          setNavItems(navItems1);
      }
    }
    else
    {
        if (loggged.current) {
          loggged.current = false;
          console.log('navItems',navItems);
        }
    }
  },[navItems,data,logout]);

  // console.log('dataaa',data)
  // console.log('navItems',navItems)

  return (

      <section className="navbar-area navbar-nine" target="">
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
                    {/*<li className="nav-item">
                      <a className="page-scroll active" href="#hero-area">Home</a>
                    </li>

                    <li className="nav-item">
                      <a className="page-scroll" href="#our-story">Our Story</a>
                    </li>

                    <li className="nav-item">
                      <a className="page-scroll" href="#services">Services</a>
                    </li>

                    <li className="nav-item">
                      <a className="page-scroll" href="#pricing">Pricing</a>
                    </li>

                    <li className="nav-item">
                      <a className="page-scroll" href="#blogs-news">Blogs</a>
                    </li>

                    <li className="nav-item">
                      <a className="page-scroll" href={props.link}>{props.title}</a>
                    </li>
                    
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">Contact</a>
                    </li>*/}

                      {(navItems) ? navItems : ''}

                    <AuthProtected>
                      <li className="nav-item flex items-center justify-center m-auto">
                        <Button className="btn-warning" onClick={logout}>Logout</Button>
                      </li>
                    </AuthProtected>

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