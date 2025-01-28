import Navbar from './components/Navbar';


import FooterArea from './components/FooterArea';

// import { Link, Outlet } from "react-router-dom";
import { useCookies } from 'react-cookie';
import AuthProtected from './util/AuthProtected';

import { useNavigate, Outlet } from "react-router-dom";
import {Button,Nav} from 'react-bootstrap';


const Layout = (props) => {

	const classes = ' layout-area bg-light '+props.className;
	const Id = (props.id) ? props.id : 'layout_section';
	const [cookies, , removeCookie] = useCookies();
	const navigate = useNavigate();

	const logout = () => {
    if (cookies.token) {
	      removeCookie('token',{samesite:'Lax'});
	      // window.location.reload()
	      navigate('/login');
	    }
	  }


	return (
		<div id={Id} className={classes}>
			<Navbar title="FAQ" link='#faq'/>
			<AuthProtected>
              <li className="nav-item flex items-center justify-center m-auto">
                <Button className="btn-warning" onClick={logout}>Logout</Button>
              </li>
            </AuthProtected>
			
			
	      	<div className="layout-header">
	      		
	      		<Outlet />
	      	</div>

      		
			<FooterArea />
		</div>
	);
}

export default Layout;