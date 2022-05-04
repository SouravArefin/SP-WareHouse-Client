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
            console.log("delete with id", id)
            
            
            fetch(`http://localhost:4000/items/${id}`, {
                method: 'DELETE',


            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
            toast('Item delete successfully')
        }
        else {
            toast('ok,No problem')
        }
    }
   
   



    return (
        <div>
            <button style={{ marginTop: '15%'}} className='bg-[#690707] ml-2 hover:bg-[#141414]  px-4 py-2 mb-2  text-white'><Link to='/addItems'>Add New Items</Link></button>
             <div className='mt-20'>
            <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Choose your valuable items..</h1>
            <h1 className='text-3xl text-green-700 font-medium text-center py-4'>Best quality Items For You</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                    { 
                        items.map(item => <ManageItem
                            key={item._id}
                            send={item}
                            sendEvent={handleDelete}
                        ></ManageItem>)
                    }
                   
            </div>
        </div>
        </div>
    );
};

export default HomeItem;