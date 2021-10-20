import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';

const Exparts = () => {
    const [expart, setExpart]=useState([])
    useEffect(()=>{
        fetch('./Expart.json')
        .then(res=>res.json())
        .then(data=>setExpart(data))
    },[]) 
    return (
        <div>
            <h1 className=" text-primary mt-5" > Our Expart Spicalist Team </h1>

            <div class="row row-cols-1 row-cols-md-3 g-4">
             
             {
                 expart.map(expart=> <Expart
                 expart={expart}
                 ></Expart>)
             }

             </div>
        </div>
    );
};

export default Exparts;