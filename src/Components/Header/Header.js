import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png' 
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth()
    return (
        <div   className=" header-container sticky-top bg-light">
        <Navbar style={{"backgroundColor":"#2A2B33","textAlign":"center"}} collapseOnSelect expand="lg" bg="" variant="light">
<Container className="">
<Navbar.Brand ><Link to="/home"><img style={{"width":"150px"}} src={logo}  alt=""  />  </Link> </Navbar.Brand>
        
        

<Navbar.Toggle className="toogle" aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
 <Nav className="ms-auto p-2">
   <Link className="text-decoration-none p-3" to="/home"><span id="hover"> Home</span>  </Link>

     
      

  { user?.email &&  <>
  
  <Link className="text-decoration-none p-3" to="/booking"><span id="hover">MyOrders</span></Link>

   <Link className="text-decoration-none p-3" to="/manageorder"><span id="hover">Manage orders</span></Link>
   
   <Link className="text-decoration-none p-3" to="/addservices"><span id="hover">Add A New Service</span></Link> 
   </>
   
   
   }
   
  
  { user.email? <button onClick={logOut} className="btn btn-light"><i className="fas fa-sign-out-alt"></i>Logout</button>:
    
  <Link className="text-decoration-none p-3" to="/login"><span id="hover"><i className="fab fa-google"></i> Login</span></Link>}
  
 
 

     { user?.email && 
    <span id="hover" className="p-3">User:{user.displayName}</span>
  } 
    
   
 
{/*  
   <Link className="text-decoration-none p-3" to="/register"><span id="hover">Signup</span></Link> */}
   
 </Nav>

</Navbar.Collapse>
</Container>
</Navbar> 
     </div>
    );
};

export default Header;