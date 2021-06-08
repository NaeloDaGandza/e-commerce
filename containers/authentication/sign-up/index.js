import {useHistory} from 'react-router-dom';
import React from 'react';

const SignUp = () => {

	const history = useHistory();

	return (
		<div>
			<span>Login: <input/></span> <br/>
			<span>Password: <input/></span> <br/>
			<span>Confirm Password: <input/></span> <br/>
			<button>Sign Up</button>
			<button onClick={() => {history.push('/signIn')}}>Go To Sign In</button>
		</div>
	)
};

export default SignUp;
