import './ToDoItemDate.css';

const ToDoItemDate = (props) => {

	const todoDate = new Date(props.date);
	const month = todoDate.toLocaleDateString('en-US', {month: 'long'});
	const day = todoDate.toLocaleDateString('en-US', {day: '2-digit' , type:'original'});
	const year = todoDate.getFullYear();

	return (
		<div className="todo-date">
			<div className="todo-date__month">{month}</div>
			<div className="todo-date__year">{year}</div>
			<div className="todo-date__day">{day}</div>
		</div>
	);
}

export default ToDoItemDate;