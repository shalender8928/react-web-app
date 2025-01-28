import SectionDesign from '../components/UI/SectionDesign';

import LoginForm from '../components/PageComponents/LoginForm';

const Login = () => {

	return (
		<SectionDesign title="Login" id="login">
			<div className="contact-form-wrapper mx-auto col-md-6 offset-md-3 col-sm-8 offset-sm-2">
				<LoginForm /> 
			</div>
		</SectionDesign>
	);
}

export default Login;