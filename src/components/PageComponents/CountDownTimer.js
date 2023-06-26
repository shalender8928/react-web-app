import { useEffect, useState } from "react";
import { Button, Badge } from 'react-bootstrap';

const useCountDown = (start: number, reset: boolean) => {

  const [counter, setCounter] = useState(start);


  useEffect(() => {
    if (reset) {
      setCounter((counter) => start);

    }
    if (counter === 0) {
      return;
    }

    setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
  }, [counter,reset, start]);
  return counter;
};

const Countdown = ({ seconds, reset }) => {
  const timeLeft = useCountDown(seconds,reset);
  return <div>{timeLeft}s</div>; 
}

export default function CountDownTimer({start}) {
  const [isVisible, setIsVisible] = useState(true);
  const [timer, setTimer] = useState(false);
  const [btnText, setBtntext] = useState('Reset');
  const clickReset = () => {
    setTimer((timer) => !timer)
    setIsVisible(!isVisible)
  }

  useEffect( () =>{

    if (!timer) {
      setBtntext((btnText) => 'Reset')
    }
    else
    {
      setBtntext((btnText) => 'Start')
    }
  },[timer])


  return (
    <div className="CountDownTimer">
    <Button onClick={clickReset}><i className="lni lni-reload"></i> {btnText} Timer {isVisible && <Badge bg="danger"><Countdown seconds={start} reset={timer} /></Badge>}</Button>    
    </div>
  );
}