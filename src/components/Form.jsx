import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [ formState, setFormState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    //validations one state for each type of error
    const [first_nameError, setfirst_nameError ] = useState("");

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }    
        //validator function here
    const first_nameValid = (first_name) => {
        if(first_name.length <= 2){
            return false;
        }
        return true;
    }  
    
    const last_nameValid = (last_name) => {
        if(last_name.length <= 2){
            return false;
        }
        return true;
    }

    const emailValid = (email) => {
        if(email.length <= 5){
            return false;
        }
        return true;
    }

    const passwordValid = (password) => {
        if(password.length <= 8){
            return false;
        }
        return true;
    }

    const handleConfirmPassword = (e) => {
        if(formState.password !== formState.confirmPassword){
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        if(formState.password !== formState.confirmPassword){
            return false; // The form won't submit
        }
        else return true; // The form will submit
     }

    const allValid = () => {
        return first_nameValid(formState.first_name);
    }

    return(
        <div>
            <h1>Create a User</h1>
            <form>
                <label>First Name</label>
                <input type='text' name="first_name" onChange={onChangeHandler}></input><br/>
                {first_nameValid(formState.first_name) ? "" : <p>first name too short!</p> }<br/>
                
                <label>Last Name</label>
                <input type='text' name="last_name" onChange={onChangeHandler}></input><br/>
                {last_nameValid(formState.last_name) ? "" : <p>last name too short!</p> }<br/>
                
                <label>Email</label>
                <input type='text' name="email" onChange={onChangeHandler}></input><br/>
                {emailValid(formState.email) ? "" : <p>email must be at least 5 chars!</p> }<br/>
                
                <label>Password</label>
                <input type='password' name="password" onChange={onChangeHandler}></input><br/>
                {passwordValid(formState.password) ? "" : <p>passwordmust be at least 8 chars!</p> }<br/>

                <label>Confirm Password</label>
                <input type='password' name="confirmPassword" onChange={onChangeHandler}></input><br/>
                {handleConfirmPassword() ? "" : <p>password doesn't match!</p> }<br/>

                {allValid() ? <input type="submit"></input> : <input type="submit" disabled></input>}
            </form>
            
            {/* this section is useful for viewing what's in form state */}
            <h2>Form State</h2>
            <p>{formState.first_name}</p>
            <p>{formState.last_name}</p>
            <p>{formState.email}</p>
            <p>{formState.password}</p>
            <p>{formState.confirmPassword}</p>
        </div>
        
    );
};
    
export default Form;