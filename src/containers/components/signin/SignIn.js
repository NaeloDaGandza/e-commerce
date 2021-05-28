import React from 'react';


const SignIn = () => {
    const [name, setName] = useState('');
    const accountName = (eventName) => setName(eventName.target.value);

    const [pass, setPass] = useState('');
    const accountPass = (eventPass) => setPass(eventPass.target.value);



    return(
        <div>
            <span>Login: <input value = {name} onChange = {accountName}/></span> <br/>
            <span>Password: <input value = {pass} onChange ={accountPass} type= {"password"}/></span> <br/>
            <button>Login</button>
        </div>
    )
}

export default SignIn;