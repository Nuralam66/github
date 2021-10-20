import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Services from './Page/Services/Services';
import NotFound from './Page/NotFound/NotFound';
import Login from './Page/LogIn/Login';
import Home from './Page/Home/Home/Home';
import Header from './Page/Home/Header/Header';
import AboutUs from './Page/AboutUs/AboutUs';
import Fotter from './Page/Fotter/Fotter';
import Detials from './Page/Detials/Detials/Detials';
import AuthProvider from './Contex/AuthProvider';
import PrivetRoute from './Page/Home/PrivetRoute/PrivetRoute';
import Register from './Page/Home/Register/Register';

function App() {
  return (
    <div className="App">
     
   <AuthProvider>
   <BrowserRouter>
     <Header></Header>
     <Switch> 
       <Route exact path='/home' > 
       <Home></Home>
       </Route>
       <Route path="/services" >
         <Services></Services>
       </Route>
       <Route path="/login" >
         <Login></Login>
       </Route>
       <Route path="/aboutus" >
         <AboutUs></AboutUs>
       </Route>
       <PrivetRoute path="/detials/:serviceId"> 
        <Detials></Detials>
         </PrivetRoute>
         <Route path="/register" >
           <Register></Register>
         </Route>
       <Route path="*" >
         <NotFound></NotFound>
       </Route>
     </Switch>
     <Fotter></Fotter>
     </BrowserRouter>
   </AuthProvider>

    </div>
  );
}

export default App;
