import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';


const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
  //console.log(location);
 // console.log(loading);
  if (loading) {
    return 
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
      return <Navigate to="/signin" state={{ from: location }} replace />;
      
  }
  else { return children }
   

};

export default RequireAuth;