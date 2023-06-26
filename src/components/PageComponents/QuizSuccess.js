import Alert from 'react-bootstrap/Alert';

const PassText = (props) => {
	return (

    <div className="content">
		<div className="">
        	<Alert variant="default" onClick={props.action} dismissible className="thumb-close-cstm">
		        <Alert.Heading><i className="lni lni-thumbs-up text-success"></i></Alert.Heading>
				<h5 className="text-success">Success!</h5>
		        <p>You can move to the another quiz.</p>
		    </Alert>
      	</div>
	</div>
				  
	);
}

export default PassText;