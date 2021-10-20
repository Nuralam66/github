import React from 'react';
import './Fotter.css'

const Fotter = () => {
    return (
        <div className="fotter-img">
        <div className="fotter">
            <div>
                 <h1 className="text-info" > Our Location</h1>
                <h3 className="text-danger" > Imporial hospital ltd </h3> 
                <h5 className="text-primary" > Nasirabad , Chittagram  </h5>

            </div>


            <div> 
                <h1 className="text-info" >Contact Us </h1>
                <h3 className="text-danger" > TelePhone:+85413514158</h3>
                <h5 className="text-primary" > Email:imprial123@gmail.com </h5>
            </div>


            <div>
                <h1 className=" text-primary" > Follow Us </h1>
                <h4> Facebook:<i class="fab fa-facebook-f"></i> </h4>
                <h4> Twitter:<i class="fab fa-twitter"></i> </h4>
                <h4> Instagram:<i class="fab fa-instagram"></i></h4>
            </div>
        </div>
        </div>
    );
};

export default Fotter;