import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';
import image from '../../no-image.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [user] = useAuthState(auth)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
    };
    console.log(user)


    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;


    return (
        <nav className=" text-black py-4 md:py-1  absolute top-0 z-50 bg-black shadow-lg bg-clip-padding bg-opacity-70 w-full">
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden cursor-pointer" >

                {open ? <ImCross className="h-4 w-4 ml-2 text-white"></ImCross> : <IoMdMenu className="text-white h-6 w-6 ml-2"></IoMdMenu>}
            </div>


            <div className='flex items-center'>

                <ul className={` w-full md:w-2/3 text-lg py-2 md:flex items-center md:justify-between absolute md:static duration-500 ease-in-out container mx-auto ${open ? "top-10 w-full" : "top-[-300px]"}`}>
                    <div className="logo hidden md:block">
                        <h1 className='cursor-pointer -mt-5 sp-style' onClick={() => navigate('/')}><span className="text-8xl text-orange-800">sp</span><span className="text-xl text-amber-600">WareHouse</span></h1>
                    </div>
                    <div className="items md:flex">
                        <li className='p-2 sp-style md:mx-2 li-style text-white font-medium'><NavLink to="/">Home</NavLink></li>
                        <li className='p-2 sp-style md:mx-2 li-style text-white font-medium'><NavLink to="/blog">Blog</NavLink></li>
                        <li className='p-2 sp-style md:mx-2 li-style text-white  font-medium'><NavLink to="/services">Items</NavLink></li>
                        <li className='p-2 sp-style md:mx-2 li-style text-white  font-medium'><NavLink to="/contact">Contact Us</NavLink></li>

                        {
                            user ?
                            <>
                                
                                <li style={{ cursor: 'pointer' }} className='p-2 md:ml-2 text-green-400 font-medium'><Link to="/manageItem">Manage Items</Link></li>
                                <li style={{ cursor: 'pointer' }} className='p-2 md:ml-2 text-green-400 font-medium'><Link to="-addItems">Add Items</Link></li>
                                <li style={{ cursor: 'pointer' }} className='p-2 md:ml-2 text-green-400 font-medium'><Link to="/account">My Account</Link></li>
                                <li style={{ cursor: 'pointer' }} className='p-2 md:mx-2  text-red-500 font-medium' onClick={logout}>Sign Out <FontAwesomeIcon icon={faSignOut} /></li>
                             </>

                                :
                              
                                <li style={{ cursor: 'pointer' }} className='p-2 md:mx-2 text-blue-500 font-medium'><Link to="/login">Sign In <FontAwesomeIcon icon={faSignIn} /></Link></li>
                        }



                        


                    </div>
                </ul>

              

            </div>


        </nav>
    );
};

export default Navbar;