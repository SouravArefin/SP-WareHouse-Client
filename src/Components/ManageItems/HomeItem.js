import React from 'react';
import useItems from '../../Hooks/useItems';
import ManageItem from './ManageItem';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useItemDetail from '../../Hooks/useItemDetail';
import Update from '../UpdateItems/Update';
const HomeItem = () => {
    const {items, setItems} = useItems()
    console.log(items, 'items')
   
    const handleDelete = id => {
        
        const confirmMsg = window.confirm("Are you sure?")

        if (confirmMsg) {
            
            
            fetch(`https://powerful-dawn-49608.herokuapp.com/items/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
            toast.success('This Fruit delete successfully')
        }
        else {
            toast.error('ok,No problem')
        }
    }
   
   



    return (
        <div>
           
             <div className='mt-20'>
            <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Fruits Collection</h1>
                <h1 className='serv-head text-2xl text-gray-500 font-medium text-center py-4'>Total Fruits : {items.length} </h1>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                    { 
                        items.map(item => <ManageItem
                            key={item._id}
                            send={item}
                            sendEvent={handleDelete}
                        ></ManageItem>)
                    }
                   
                </div>
                <button  className='bg-[#2B3A05] ml-10 hover:bg-[#141414]  px-4 py-2 mb-2  text-white'><Link to='/addItems'>Add New Items</Link></button>
        </div>
        </div>
    );
};

export default HomeItem;