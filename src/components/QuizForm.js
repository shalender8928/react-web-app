import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import PassText from './PageComponents/QuizSuccess';
import CountDownTimer from './PageComponents/CountDownTimer';

const QuizForm = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
  const [show, setShow] = useState(false);

  const checkError = (show) => setShow(true)

  const checkQuiz = () =>
  {
		setStatus('typing');
		setAnswer('');
  }

  const submitForm = (answer) => {
	  // Pretend it's hitting the network.
	  return new Promise((resolve, reject) => {
	    setTimeout(() => {
	      let shouldError = answer.toLowerCase() !== 'hello'
	      if (shouldError) {
	      	checkError(show);
	        reject(new Error('Good guess but a wrong answer. Try again!'));
	      } else {
	        resolve();
	      }
	    }, 1500);
	  });
	}

  if (status === 'success') {
	    return (
		 		<PassText action={checkQuiz}/>
		);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  const handleTextareaChange = (e) => {
    setAnswer(e.target.value);
    setError('')
    setShow(false)
  }

  return (

        <div className="content">
		      <h2 className="d-flex">City quiz <CountDownTimer start={10}/></h2>
		      <p className="py-2">
		        In which city is there a billboard that turns air into drinkable water?
		      </p>
		      <form onSubmit={handleSubmit}>
		        <textarea
		          value={answer}
		          onChange={handleTextareaChange}
		          disabled={status === 'submitting'}
		          rows="3" className="col-12 form-control"
		        />
		        {error !== null &&
			        (show) ? 
			        	<div className="pt-2">
				        	<Alert variant="danger" className="mb-1" onClose={() => setShow(false)} dismissible>
					        <Alert.Heading>oops!!!!</Alert.Heading>
					        <p>{error.message}</p>
					      </Alert>
				      	</div>
				  	: null 
		        }
		        <button className="btn btn-info mt-2" disabled={
		          answer.length === 0 ||
		          status === 'submitting'
		        }>
		          Submit
		        </button>
		      </form>
    		</div>
  );
}

export default QuizForm;