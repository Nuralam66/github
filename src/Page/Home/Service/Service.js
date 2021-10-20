import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id, img,cetagory,description,spicalist,title }=service
    return (
        <div className="service pb-3" >
            
            <div class="col">
      <div class="card">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body bg-info ">
          <h5 class="card-title"> {cetagory} </h5>
          <h4> {spicalist} </h4>
          <h4> Title:{title} </h4>
          <p class="card-text">{description}</p>
          <Link to={`/detials/${id}`} > 
          <button className="button"> See Detials </button>
          </Link>
        
        

        </div>
      </div>
    </div>

        </div>
    );
};

export default Service;
