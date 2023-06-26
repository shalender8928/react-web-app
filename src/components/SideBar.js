const Sidebar = (props) => {
  return (
    <span>
    <div className={`sidebar-left ${props.activeClass}`}>
      <div className="sidebar-close">
        <a className="close" href="#close" onClick={props.tgl}>
          <i className="lni lni-close"></i>
        </a>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-logo">
          <a href="index.html">
            <img src="assets/images/logo.svg" alt="Logo"/> 
          </a>
        </div>
        <p className="text">Lorem ipsum dolor sit amet adipisicing elit. Sapiente fuga nisi rerum iusto intro.</p>
        
        <div className="sidebar-menu">
          <h5 className="menu-title">Quick Links</h5>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#our-team">Our Team</a></li>
            <li><a href="#news">Latest News</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="sidebar-social align-items-center justify-content-center">
          <h5 className="social-title">Follow Us On</h5>
          <ul>
            <li>
              <a href="#facebook-link"><i className="lni lni-facebook-filled"></i></a>
            </li>
            <li>
              <a href="#twitter-link"><i className="lni lni-twitter-original"></i></a>
            </li>
            <li>
              <a href="#linkedin-link"><i className="lni lni-linkedin-original"></i></a>
            </li>
            <li>
              <a href="#youtube-link"><i className="lni lni-youtube"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className={`overlay-left ${props.activeClass}`} onClick={props.tgl}></div>
    </span>
  );
}

export default Sidebar;