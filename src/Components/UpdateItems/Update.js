import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail'
import { ToastContainer, toast } from 'react-toastify';
const Update = () => {
    const { id } = useParams()
    const { item } = useItemDetail(id)
   



    const handleSubmit = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        // console.log(name,'name');
        // const img = e.target.img.value;
        const quantity = e.target.quantity.value;
        const updateItem = { quantity }
        
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

        e.target.reset()
}
    const handleDeliver = id => {

        const quantityUpdate = item?.quantity 
        console.log(quantityUpdate);
        const updateQuantity = {quantityUpdate}
        console.log(quantityUpdate);
        fetch(`http://localhost:4000/items/deliver/${id}`, {
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
    return (
        <div>
            <button style={{marginTop:'15%',marginLeft:'10%'}}className='bg-[#03aaf7] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'><Link to='/manageItem'>ManageItem</Link>   </button>
            <div style={{ margin: '10%' }}>
                <div style={{ paddingLeft: '30%', paddingTop: '10%', paddingBottom: '10%' }} className='custom-shadow  rounded-md'>

                    <div style={{ border: "none" }} className="max-w-sm  rounded-lg border text-center">
                        <img className="rounded-t-lg w-2/3 mx-auto" src={item?.img} alt="" />
                        <div className="p-5">
                            <h1 className='font-bold'> Package Name: {item?.name}</h1>

                            <p className="mb-3 font-normal pt-5 text-gray-700 dark:text-gray-400"><span className='font-bold'>Benefits:</span>{item?.details} </p>
                            <p><span className='font-bold'>Price:</span> BDT, {item?.price}/-</p>
                            <p><span className='font-bold'>quantity:</span> {item?.quantity}</p>
                            <p><span className='font-bold'>Time:</span> : {item?.Duration}</p>

                        </div>
                        <button onClick={() => handleDeliver(id)} className='bg-[#f75c03] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Delivered</button>
                        <form onSubmit={handleSubmit}>
                <div class="mb-6">
    
    <input type="number" id="text" name='quantity' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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