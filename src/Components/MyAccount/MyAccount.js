import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import image from '../../no-image.png'
const MyAccount = () => {
    const [user] = useAuthState(auth)
    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;
    return (
        <div style={{margin:'20%'}}>
            {/* <div className=' flex w-48 items-center absolute top-0 right-0 md:static'>
                <p className=' font-black '>Name: {user? user.displayName : "Login-first"}</p>
           <img className="w-10 h-10 rounded-full  ml-3"src={userImg} alt='' />
                </div> */}
         <div className="custom-shadow">
  <h1 className='text-center text-3xl pt-5 sp-style'>My Profile:</h1>
  <div className=" items-center mt-10 p-5 ">
                    <img style={{marginLeft: '45%'}}className="w-20 h-20 rounded-full  "src={userImg} alt=''/>
      <div >
                        {
                            user ? <h1 className='font-bold mt-5 text-center text-2xl sp-style'>Name: {user?.displayName}</h1>
                                :       <h1 className='font-bold mt-5 text-center text-2xl sp-style'>Name: Login-First</h1>
}
                        {
                            user ? <h1 className='font-bold mt-5 text-center text-2xl sp-style'>Email: {user?.email}</h1>
                        :  <h1 className='font-bold mt-5 text-center text-2xl sp-style'>Email: Login-First</h1>
                        
                        }
      
        </div>
      
  </div>
  

</div>
        </div>
    );
};

export default MyAccount;