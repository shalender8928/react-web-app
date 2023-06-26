import SectionDesign from './../UI/SectionDesign';
import ToDoItems from './ToDoItems';
import AddToDoItem from './AddToDoItem/AddToDoItem';

const ToDoList = () => {

	const items = [
		{id:'1t', title:"Title 1", date:"2021-02-28", amount:"203.98"},
		{id:'2t', title:"Title 2", date:"2021-07-03", amount:"103.98"},
		{id:'3t', title:"Title 3", date:"2022-06-18", amount:"234.98"},
		{id:'4t', title:"Title 4", date:"2022-01-23", amount:"863.98"},
		{id:'5t', title:"Title 5", date:"2021-04-30", amount:"53.98"}
	]

	return (

		<SectionDesign id="todo-list" className="py-0">
			<AddToDoItem />
			<div className="">
				<ToDoItems title={items[0].title} date={items[0].date} amount={items[0].amount} />
				<ToDoItems title={items[1].title} date={items[1].date} amount={items[1].amount} />
				<ToDoItems title={items[2].title} date={items[2].date} amount={items[2].amount} />
				<ToDoItems title={items[3].title} date={items[3].date} amount={items[3].amount} />
				<ToDoItems title={items[4].title} date={items[4].date} amount={items[4].amount} />
			</div>
		</SectionDesign>
	);
}

export default ToDoList;