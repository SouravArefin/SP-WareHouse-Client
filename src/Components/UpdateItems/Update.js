import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail'
import { ToastContainer, toast } from 'react-toastify';
const Update = () => {
    const { id } = useParams()
    const { item } = useItemDetail(id)
   



    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name,'name');
        const img = e.target.img.value;
        const quantity = e.target.quantity.value;
        const updateItem = { name, img,quantity }
        
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
               toast('item update successfully')
        })

        e.target.reset()
}
    const handleDeliver = id => {

        console.log(id)
        const updateQuantity = item?.quantity - 1
        console.log(updateQuantity);
        fetch(`http://localhost:4000/deliver/${id}`, {
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
            <div style={{ margin: '20%' }}>
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
                        <button onClick={()=>handleDeliver(id)}className='bg-[#f75c03] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Delivered</button>
                    </div>

                </div>
            </div>



            <div style={{ margin: '20%' }}>
                <h1 className='text-center text-6xl sp-style mb-10'>Update Form</h1>
                <form onSubmit={handleSubmit}>
                    <input className='input-field' type="text" name='name' placeholder="Name" /> <br />
                    <input className='input-field' type="text" name='quantity' placeholder="quantity" /> <br />
                    <input className='input-field' type="text" name='img' placeholder="img" /> <br />
                  
                    <input className='cursor-pointer input-field ' type="submit" value='Update' /> <br />



                </form>
            </div>
            <ToastContainer />
        </div>


    );
};

export default Update;