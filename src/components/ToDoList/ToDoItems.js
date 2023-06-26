import './ToDoItems.css';
import ToDoItemDate from './ToDoItemDate';

const ToDoItems = (props) => {

	
	return (
		<div className="todo-item">
			<ToDoItemDate date={props.date} />
			<div className="todo-item__description">
				<h2 className="todo_title">{props.title}</h2>
				<div className="todo-item__price">${props.amount}</div>
			</div>
		</div>
	);
}

export default ToDoItems;