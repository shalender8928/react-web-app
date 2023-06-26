import {useState} from 'react';

const Panel = ({title,children}) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<section className="panel">
			<h3>{title}</h3>
			{isActive ? (
				<p>{children}</p>
			) : (
				<button className="btn btn-info" onClick={() => setIsActive(true)}>Show</button>
			)}
		</section>
	);
}

export default Panel;