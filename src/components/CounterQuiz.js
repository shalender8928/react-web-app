import CounterButton from './CounterButton';
import QuizForm from './QuizForm';

const CounterQuiz = () => {

	return (
		<div id="quiz-counter" className="latest-news-area section">
			<div className="text-center">
				<div className="container">
				    <div className="row align-items-center">
				    	<div className="col-lg-6 col-12">
				    		<CounterButton />
				    	</div>
				    	<div className="col-lg-6 col-12">
				    		<QuizForm />
				    	</div>
				    </div>
				</div>
			</div>
		</div>
	);
}

export default CounterQuiz;