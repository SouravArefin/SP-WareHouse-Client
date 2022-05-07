import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail'
import { ToastContainer, toast } from 'react-toastify';
import useItems from '../../Hooks/useItems'


const Update = () => {
    
    const { id } = useParams()
    const { item,setItem } = useItemDetail(id)
   const [increase,setIncrease] = useState(0)

    const handleIncrease = e => {
        setIncrease(e.target.value);
}

    const handleSubmit = e => {
        e.preventDefault();
    
        const quantity = parseInt(e.target.quantity.value) 
        

        if (!quantity) {
            toast('Insert quantity number')
        }
        else {
            const newQuantityIncrease =  parseInt(quantity)+ parseInt(item?.quantity)
        
            console.log(newQuantityIncrease,'newQuantityIncrease');
            const updateItem = { newQuantityIncrease }
            
            // fetch(`https://powerful-dawn-49608.herokuapp.com/items/${id}`, {
            fetch(`http://localhost:4000/items/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
             })
                .then(res => res.json())
               .then(data => {
                   console.log('success', data)
                   
                   toast('item restock successfully')
            })
        }
       

        e.target.reset()
    }
    
    const handleDeliver = id => {

        const quantityUpdate = item?.quantity 
        console.log(quantityUpdate);
     
        if (quantityUpdate>0) {
            const updateQuantity = {quantityUpdate}
        console.log(quantityUpdate);
     
        fetch(`https://powerful-dawn-49608.herokuapp.com/deliver/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
         })
            .then(res => res.json())
           .then(data => {
               console.log('success', data)
             
               toast('Your item has been delivered')
     
           })
        }
        else {
            toast('Item is out of stock.')
        }
}

    return (
        <div>
  

            <div className='flex flex-col justify-around items-center py-5 coin-card rounded-lg'>
            <img className='w-1/4 hover:scale-110 transform duration-100 ease-linear' src={item?.img} alt="" />
            <div>
                <h1 className='text-3xl sp-style font-bold text-gray-600'>{item?.name}</h1>
                <h1 className='text-xl sp-style  font-bold text-gray-600'>Supplier:{item?.supplier}</h1>
                <h1 className='text-2xl sp-style  mt-2 font-bold text-[#6D9900]'>Price: BDT {item?.price}/-</h1>
                <h1 className='text-xl sp-style  font-bold text-sky-600'>In-stock:{item?.quantity}</h1>
                <h1 className=' font-bold sp-style'>Sold:{item?.sold}</h1>
                <h1 className=' font-bold sp-style text-gray-600'>Description:{item?.description}</h1>
               
            </div>
            <form onSubmit={handleSubmit}>
                <div class="mt-3 flex items-center">
                    <input  type="number" name='quantity' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <input className='ml-2 text-white bg-[#f37b0b] border-2 border-transparent  font-medium hover:font-medium px-5 py-2 cursor-pointer rounded-md' type="submit" value="Restock" />
                </div>
                </form>  
                <div className='flex items-center'>
    
            <button className='mx-auto mt-5 text-white bg-[#f00606] border-2 border-transparent  font-medium hover:font-medium px-10 py-2 cursor-pointer rounded-md' onClick={() => handleDeliver(id)}>Deliver</button>
                <button className=' mt-5  ml-2 text-white bg-[#1303f7] border-2 border-transparent hover:border-2  font-medium hover:font-medium px-10 py-2 cursor-pointer rounded-md' ><Link to='/manageItem'>ManageItem</Link> </button>
       
             </div>
        </div>



            
            <ToastContainer />
        </div>


    );
};

export default Update;