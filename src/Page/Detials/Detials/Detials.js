import React from 'react';
import { useParams } from 'react-router';

const Detials = () => {
    const {serviceId}=useParams();
    return (
        <div> <h1 className="text-primary" > This Is Single Page</h1>
            <h1 className="text-info" > That This Ditals Which you clicked:{serviceId}</h1>
        </div>
    );
};

export default Detials;