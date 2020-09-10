import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [ formState, setFormState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
    })

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: [e.target.value]
        })
    }

    return(
        <div>
            <h1>Create a User</h1>
            <form>
                <label>First Name</label>
                <input type='text' name="first_name" onChange={onChangeHandler}></input><br/>
                <label>Last Name</label>
                <input type='text' name="last_name" onChange={onChangeHandler}></input><br/>
                <label>Email</label>
                <input type='text' name="email" onChange={onChangeHandler}></input><br/>
                <label>Password</label>
                <input type='password' name="password" onChange={onChangeHandler}></input><br/>
                <label>Confirm Password</label>
                <input type='password' name="confirm_password" onChange={onChangeHandler}></input><br/>
            </form>
            
            {/* this section is useful for viewing what's in form state */}
            <h2>Form State</h2>
            <p>{formState.first_name}</p>
            <p>{formState.last_name}</p>
            <p>{formState.email}</p>
            <p>{formState.password}</p>
            <p>{formState.confirm_password}</p>
        </div>
        
    );
};
    
export default Form;