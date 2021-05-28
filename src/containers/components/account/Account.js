import React, { useState } from 'react';
import SignIn from '../signin/SignIn';


const Account = () => {
    const [name, setName] = useState('');
    const accountName = (eventName) => setName(eventName.target.value);

    const [surname, setSurname] = useState('');
    const accountSurname = (eventSurname) => setSurname(eventSurname.target.value);


    return(
        <div className ={'account'}>
            <div>
                Name: {name}
            </div>
            <div>
                Surname: {surname}
            </div>
        </div>
    )
}

export default Account;
