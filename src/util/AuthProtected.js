import React, {useState,useEffect,useRef} from 'react';
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";

const AuthProtected =(props)=>{
	
	const [cookies] = useCookies(['token']);
	const navigate = useNavigate();
	const loggged = useRef(true);

	const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
    	if (loggged.current) {
			loggged.current = false;
		    if(!isLoggedIn) {
		        
		        const userToken = cookies.token;
		        if (userToken && userToken !== 'undefined') {
		        	setIsLoggedIn(true);
		        }
		    }
		}
    }, [isLoggedIn,cookies,navigate]);

	return (
		<>{isLoggedIn ? props.children : null}</>
	);
}

export default AuthProtected;