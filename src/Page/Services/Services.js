import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {
   
    const [service, setservice ]= useState([])
    useEffect(()=> {
        fetch('./health.json')
        .then(res=>res.json())
        .then(data=> setservice(data))
    },[] )
     
    return (
        <div id="service" >
            <h1 className="text-danger fs-1" > Our Avaliable Services</h1>

            <div className="services" >
              
             <div class="row row-cols-1 row-cols-md-3 g-4">
          {
                     service.map(service=> <Service
                  key={service.id}
                  service={service}
                 ></Service>) }
            </div>
           
             </div>
          
        </div>
    );
};

export default Services;