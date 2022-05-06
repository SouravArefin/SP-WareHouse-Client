import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ManageItem = (props) => {
    const { _id, name, img,supplier,quantity,description,sold,price, email
    } = props.send
    console.log(props.send);
    //const {items, setItems} = useItems()
    
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/inventory/${id}`)
    }
    let chnageQuantity = quantity <= 0 ? <span className='bg-red-600 rounded-full p-2 ml-2  text-white'>Stock-Out</span> : quantity
    console.log(chnageQuantity);
    return (

     <div>
     
            <div className='cursor-pointer rounded-lg bg-white px-5'>
            <img className="rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img} alt="" />
            <div className="spacer w-full bg-[#6D9900]"></div>
            <div className='text-center mt-3'>
                <h1 className='text-lg md:text-xl font-bold text-gray-600 mb-1'>{name}</h1>
                    <h1 className='text-lg md:text-xl font-bold text-gray-600 mb-1'>Supplier:{supplier}</h1>
                <p className='font-bold text-[#6D9900] mb-3'>Price: BDT {price}/-</p>
                    <p className='font-bold text-[#5f57a8] mb-3'>In-Stock:{chnageQuantity}</p>
                    <p className='font-bold text-[#233002] mb-3'>Sold:{sold}</p>
                <p className='text-[#707070] line-height'> Description:{description} </p>
            </div>
            <div className='flex justify-evenly mt-5'>
                <button onClick={() => props.sendEvent(_id)} className='nav-btn font-bold text-md flex items-center'><AiFillDelete></AiFillDelete><span className='font-bold text-md ml-1'>Delete</span></button>
                <button onClick={() => handleUpdate(_id)}className='nav-btn font-bold text-md flex items-center'><GrUpdate></GrUpdate><span className='font-bold text-md ml-1'>Update</span></button>
            </div>
        </div>
        </div>
       
    );
};

export default ManageItem;