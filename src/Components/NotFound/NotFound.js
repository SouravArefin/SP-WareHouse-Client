import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../error.gif';
const NotFound = () => {
    return (
        <>
             
              <div className='not'>
           
           <img className="mt-10 h-50 w-full"src={error} alt=''/>
        </div>
        </>
      
    );
};

export default NotFound;