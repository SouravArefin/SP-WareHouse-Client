import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail'
import { ToastContainer, toast } from 'react-toastify';
import useItems from '../../Hooks/useItems'
const Update = () => {
    
    
    const { id } = useParams()
    const { item,setItem } = useItemDetail(id)
   const [increase,setIncrease] = useState(0)
// const [reload,SetReload] = useState(false)
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
            
            fetch(`https://powerful-dawn-49608.herokuapp.com/items/${id}`, {
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
            <button style={{marginTop:'15%',marginLeft:'10%'}}className='bg-[#03aaf7] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'><Link to='/manageItem'>ManageItem</Link>   </button>
            <div style={{ margin: '10%' }}>
                <div style={{ paddingLeft: '30%', paddingTop: '10%', paddingBottom: '10%' }} className='custom-shadow  rounded-md'>

                    <div style={{ border: "none" }} className="max-w-sm  rounded-lg border text-center">
                        <img className="rounded-t-lg w-2/3 mx-auto" src={item?.img} alt="" />
                        <div className="p-5">
                            <h1 className='font-bold'>  Name: {item?.name}</h1>

                            <p className="mb-3 font-normal pt-5 text-gray-700 dark:text-gray-400"><span className='font-bold'>Description:</span>{item?.description} </p>
                            <p><span className='font-bold'>Supplier:</span>  {item?.supplier}</p>
                            <p><span className='font-bold'>quantity:</span> {item?.quantity}</p>
            

                        </div>
                        <button onClick={() => handleDeliver(id)} className='bg-[#f75c03] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Delivered</button>
                        
                        <form onSubmit={handleSubmit}>
                <div className="mb-6">
    
              <input onBlur={handleIncrease}type="number" id="text" name='quantity' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>
  <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"value='Restock'/>
                </form>
                    </div>

                </div>
            </div>



            <div style={{ margin: '20%' }}>
            
   
            </div>
            <ToastContainer />
        </div>


    );
};

export default Update;