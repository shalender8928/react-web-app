import React, {useState, useEffect} from 'react';
import Clock from './PageComponents/TimeClock';

const DateAndTime = () => {
	const today = new Date();
	const formateDate = (date) => {
		return (
			new Intl.DateTimeFormat(
				'en-US',
				{ weekday: 'long' }
			).format(date)
		)
	}

	/*Clock time and color*/
	const useTime = () => {
	  const [time, setTime] = useState(() => new Date());
	  useEffect(() => {
	    const id = setInterval(() => {
	      setTime(new Date());
	    }, 1000);
	    return () => clearInterval(id);
	  }, []);
	  return time;
	}

	const time = useTime();
	const [color, setColor] = useState('red');
	/*Clock time and color ends*/

	return(
		<span>
			<p className="flex justify-end" style={{color: '#b96f6f'}}>
	          	Today is
	          	<span className="fw-bold text-success"> {formateDate(today)} </span>
		        <span className="fw-bold">
		          <Clock color={color} time={time.toLocaleTimeString()} />
		        <span className="px-2">
			        Clock Color:{' '}
			        <select value={color} onChange={e => setColor(e.target.value)}>
			          <option value="red">red</option>
			          <option value="lightcoral">lightcoral</option>
			          <option value="midnightblue">midnightblue</option>
			          <option value="rebeccapurple">rebeccapurple</option>
			        </select>
			      </span>
		        </span>
	        </p>
        </span>
	);
}

export default DateAndTime;