import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1> Please Register</h1>
            <form >
                <input type="email" placeholder="Inter your email" />
                <br />
                <input type="password" name="" id="" placeholder="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <Link to="/login" >Alredy Register</Link>
            
        </div>
    );
};

export default Register;