import React, { useState } from 'react';
import './style.css';

const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const createRegistration = () => {

    }
    
    return (
        <form onSubmit={createRegistration} className='form'>
            <h1>REGISTRATION</h1>
            <div className='form__div'>
                <input type="text"  placeholder="Email Address" />
                <input type="text"  placeholder="User Name" />
                <input type="text"  placeholder="Password" />
                <input type="text"  placeholder="Confirm Password" />
                <button type='submit'>REGISTER</button>
            </div>
        </form>
    )
};

export default Registration;