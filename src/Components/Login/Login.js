import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';






const Login = () => {
    const location =useLocation()
    const history=useHistory()
    const uri =location.state?.from || '/home'

    const {user,googleSignIn,logOut,setUser,setIsloading}=useAuth()
    
   const handleGoolesinIn=()=>{
    googleSignIn()
    .then(result => {
        history.push(uri)
        const user = result.user;
       


        setUser(user)
       
    })
    .finally(()=>{
        setIsloading(false)
        
    })
   }

    return (
        <div className="text-center">
            <h2>{user?.email}</h2>
            <button className="btn btn-info p-3 fw-bold" onClick={handleGoolesinIn}> <i className="fab fa-google"></i> Google Signin</button><br /><br />


            <button className="btn btn-danger p-3 fw-bold" onClick={logOut}><i className="fas fa-sign-out-alt"></i> Google Signout</button>
            
        </div>
    );
};

export default Login;