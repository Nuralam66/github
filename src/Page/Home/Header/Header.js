import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import './Header.css'


const Header = () => {
    const {user,logOut}=useAuth();
    return (

        
               <div className="header cols-lg-4 cols-sm-12 ">
          <nav >
              <NavLink to="/home"  >Home</NavLink>
              <NavLink to="/aboutus"  >AboutUs</NavLink>
              <NavLink to="/services"  >Service</NavLink>
              <NavLink to="/notfound">NotFound</NavLink>
              <NavLink to="/register" > Register </NavLink>
              {
              user?.email?
              <button onClick={logOut} className="btn btn-info" > Log Out </button>:
              <NavLink to="/login">LogIn</NavLink>
              }
               <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
              
          </nav>
          < h1 className="text-center text-success fs-1 " > Imparial hospital Ltd </h1>
        </div>
      



        

     
    );
};

export default Header;