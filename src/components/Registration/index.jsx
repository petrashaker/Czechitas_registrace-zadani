import React, { useState } from 'react';
import ErrorModal from '../ErrorModal';
import './style.css';

const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        error: '',
    })

    const checkFormValidity = () => {
        const createUserName = user.email.split('@')[0];
        const registrationFilled = {
            username: user.username || createUserName,
            email: user.email,
            password: user.password,
            passwordConfirm: user.passwordConfirm,
            error: user.error,
        }

        const checkEmail = registrationFilled.email.trim().length > 1 && registrationFilled.email.trim().includes('@');
        const checkPassword = registrationFilled.password.length >= 5;
        const checkPasswordConfirm = registrationFilled.password === registrationFilled.passwordConfirm;

        console.log(registrationFilled);

        if(!checkEmail) {
            setUser(prevState => ({
                ...prevState,
                error: 'Please enter valid email.'
            }))
        }

        if(!checkPassword) {
            setUser(prevState => ({
                ...prevState,
                error: 'Please enter password with at least 5 characters.'
            }))
        }
        if(!checkPasswordConfirm) {
            setUser(prevState => ({
                ...prevState,
                error: 'Password and confirmed password do not match.'
            }))
        }
    }

    const createRegistration = (event) => {
        event.preventDefault();
        setUser(prevState => ({
            ...prevState,
                username: '',
                email: '',
                password: '',
                passwordConfirm: '',
                error: '',
        }));

        checkFormValidity();
    }

    const handleEmail = ({ target }) => {
        setUser(prevState => ({
            ...prevState,
            email: target.value,
        }))
    }
    const handleUserName = ({ target }) => {
        setUser(prevState => ({
            ...prevState,
            username: target.value,
        }))
    }
    const handlePassword = ({ target }) => {
        setUser(prevState => ({
            ...prevState,
            password: target.value,
        }))
    }
    const handleConfirmPassword = ({ target }) => {
        setUser(prevState => ({
            ...prevState,
            passwordConfirm: target.value,
        }))
    }

    const errorHandler = () => {
        setUser(prevState => ({
            ...prevState,
            error: null
        }))
    }

    return (
        <>
        {user.error && (
          <ErrorModal
            errorMessage={user.error}
            onClick={errorHandler}
          />
        )}
        <form onSubmit={createRegistration} className='form'>
            <h1>REGISTRATION</h1>
            <div className='form__div'>
                <input 
                    type="text"  
                    placeholder="Email Address" 
                    value={user.email}
                    onChange={handleEmail}
                />
                <input 
                    type="text"  
                    placeholder="User Name" 
                    value={user.username}    
                    onChange={handleUserName}
                />
                <input 
                    type="password"  
                    placeholder="Password" 
                    value={user.password}    
                    onChange={handlePassword}
                />
                <input 
                    type="password"  
                    placeholder="Confirm Password" 
                    value={user.passwordConfirm}   
                    onChange={handleConfirmPassword}
                />
                <button type='submit'>REGISTER</button>
            </div>
        </form>
    </>
    )
};

export default Registration;