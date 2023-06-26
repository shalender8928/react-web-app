import React, {useState} from 'react';

import './ToDoItemForm.css';

const ToDoItemForm = () => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle : '',
	// 	enteredAmount : '',
	// 	enteredDate : '',
	// });


	const titleChangeHandler = (event) =>{
		setEnteredTitle(event.target.value);
		/*setUserInput({
			...userInput,
			enteredTitle: event.target.value;
		});*/

		/*setUserInput ((prevState)=>{
			return (...prevState, enteredTitle: event.target.value);
		})*/
	}
	const amountChangeHandler = (event) =>{
		setEnteredAmount(event.target.value);
		/*setUserInput({
			...userInput,
			enteredAmount: event.target.value;
		});*/
	}
	const dateChangeHandler = (event) =>{ 
		setEnteredDate(event.target.value);
		/*setUserInput({
			...userInput,
			enteredDate: event.target.value;
		});*/
	}

	const submitHandler = (event) => {
		event.preventDefault();

		const todolistData = {
			title : enteredTitle,
			amount : enteredAmount,
			date : new Date(enteredDate)
		};
		console.log(todolistData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	}

	return (
		<form className="" onSubmit={submitHandler}>
			<div className="new-todo__controls">
				<div className="new-todo__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className="new-todo__control">
					<label>Amount</label>
					<input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
				</div>
				<div className="new-todo__control">
					<label>date</label>
					<input type="date" value={enteredDate} min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler} />
				</div>
			</div>
			<div className="new-todo__actions">
				<button type="submit">Add To Do </button>
			</div>
		</form>
	);
}

export default ToDoItemForm;