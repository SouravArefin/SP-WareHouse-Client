import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';

const ManageItem = (props) => {
    const { _id, name, img,supplier,quantity,description,sold,price, email
    } = props.send
    //console.log(props.send);
    //const {items, setItems} = useItems()
    const route = window.location.href
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/inventory/${id}`)
    }
    let chnageQuantity = quantity <= 0 ? <span className='bg-red-600 rounded-full p-2 ml-2  text-white'>Stock-Out</span> : quantity
    //console.log(chnageQuantity);
    const [user]= useAuthState(auth)
    return (

     <div className='shadow-xl'>
     
            <div className='cursor-pointer rounded-lg bg-white px-5'>
                <img className="rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear mb-5" src={img} alt=""  />
                <div className='card-border w-full  bg-[#6D9900] '>

                </div>
            <div className="spacer w-full bg-[#6D9900]"></div>
            <div className='text-center mt-3'>
                <h1 className=' sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>{name}</h1>
                    <h1 className='sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>Supplier:{supplier}</h1>
                <p className='sp-style  font-bold text-[#6D9900] mb-3'>Price: BDT {price}/-</p>
                    <p className='font-bold sp-style text-[#5f57a8] mb-3'>In-Stock:{chnageQuantity}</p>
                    <p className='sp-style  font-bold text-[#233002] mb-3'>Sold:{sold}</p>
                <p className=' sp-style text-[#707070] line-height'title={description}>{description.slice(0, 150)}...  </p>
            </div>
            <div className='flex justify-evenly mt-5 mb-10'>
                    {/* {
                        route !==('http://localhost:3000/'||'https://sp-warehouse.web.app/') &&  (
                            <button onClick={() => props.sendEvent(_id)} className='nav-btn font-bold text-md flex items-center'><AiFillDelete className='text-red-700'></AiFillDelete><span className='font-bold text-md ml-1 text-red-700'>Delete</span></button>
                        )
                    } */}
                    {
                        user&& <button onClick={() => props.sendEvent(_id)} className='nav-btn font-bold text-md flex items-center'><AiFillDelete className='text-red-700'></AiFillDelete><span className='font-bold text-md ml-1 text-red-700'>Delete</span></button>
                    }
                    
                <button onClick={() => handleUpdate(_id)}className='nav-btn font-bold text-md flex items-center'><GrUpdate className='text-sky-700'></GrUpdate><span className='font-bold text-md ml-1 text-sky-700'>Update</span></button>
            </div>
            </div>
            <ToastContainer/>
        </div>
       
    );
};

export default ManageItem;