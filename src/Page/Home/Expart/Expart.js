import React from 'react';
import './Expart.css'

const Expart = ({expart}) => {
    const{name , img, title }=expart
    return (
        <div className="expart" >
            
            <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Title:{title}</p>
      </div>
    </div>
  </div>

        </div>
    );
};

export default Expart;