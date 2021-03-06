import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Login = () => {
    const{ signInUsingGoogle}= useAuth();
    return (
        <div>
          
            <h1>Please Login </h1>
            <button onClick={signInUsingGoogle} className="btn btn-primary"> Google Sign In </button> 
            <br />
            <Link to="/register" >New User</Link> 
        </div>
    );
};

export default Login;