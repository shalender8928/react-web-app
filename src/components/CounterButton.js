import React, {useState, useEffect, useCallback} from 'react';
import { Button } from 'react-bootstrap';
import DateAndTime from './DateAndTime';



const CounterButton = () => {
	
	const [count , setCount] = useState(0);
	const [isActive, setActive] = useState(true);
	const [Btntext, setBtntext] = useState('Stop');

	const increment = (count) => {
		setCount((count) => count + 1);
	}

	const stopCount = useCallback(() => {
	    setActive(!isActive);
	},[isActive]);

	useEffect(()=>{
		if (isActive) 
		{
			setTimeout(()=>{
				setCount((count) => count +1);
			},1000)

			setBtntext('Stop');
		}
		else
		{
			setBtntext('Start');
		}
	},[stopCount,isActive,count]);


	return (
        <div className="content">
          <DateAndTime />
          <h2 className="fw-bold">Make every minute count.</h2>
          <h4 className="py-2 fw-bolder text-danger"> {count} </h4>
           <Button variant="primary" onClick={increment} disabled={isActive}>Increment +1</Button>{' '}
           <Button variant="primary" onClick={stopCount}>{Btntext} Auto Counting</Button>{' '}
        </div>        
	);
}

export default CounterButton;