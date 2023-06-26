export const Paragraph = (props) =>  {
	const classes = ' someClass '+ props.className;
	return (
		<p className={classes}>{props.children}</p>;
	);
}