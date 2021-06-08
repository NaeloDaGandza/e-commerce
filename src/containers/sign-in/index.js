import React from 'react';


const Index = () => {

    const [login, setLogin] = useState('');
	const loginFunction = (eventLogin) => setLogin(eventLogin.target.value);

	const [password, setPassword] = useState('');
	const passwordFunction = (eventPassword) => setPassword(eventPassword.target.value);

	


    return(
        <div>
            Username:<input value ={login} onChange ={loginFunction}/>
			Password:<input value ={password} onChange = {passwordFunction} type = 'password'/>
			<button>Login</button>
        </div>
    )
}

export default Index;
