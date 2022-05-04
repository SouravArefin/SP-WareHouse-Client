import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import error from '../../error.gif';
import { auth } from '../../firebase.init';
const NotFound = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    return (
        <>
             
              <div className='not'>
           
           <img className="mt-10 h-50 w-full"src={error} alt=''/>
        </div>
        </>
      
    );
};

export default NotFound;