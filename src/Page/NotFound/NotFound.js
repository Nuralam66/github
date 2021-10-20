import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/404.jpeg'

const NotFound = () => {
    return (
        <div>
            <h1> Sorry Gyes </h1>
            <h2> This Page is Empty </h2>
            <img   src={img} alt="" /> <br />

            <Link to="/home"><button className="btn-primary" >Go Back</button></Link>
            
        </div>
    );
};

export default NotFound;