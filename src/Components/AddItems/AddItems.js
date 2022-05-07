import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';

const AddItems = () => {
const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const handleSubmit = e => {
        e.preventDefault();
        
        const email = user?.email
        const name = e.target.itemName.value
        const img = e.target.itemImage.value
        const quantity = e.target.quantity.value
        const price = e.target.price.value
        const sold = e.target.sold.value
        const supplier = e.target.supplier.value
        const description = e.target.description.value
        const item = {  email,name,supplier,price,quantity,sold,img,description, }
        console.log(item)


        fetch('https://powerful-dawn-49608.herokuapp.com/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
         })
            .then(res => res.json())
           .then(data => {
               console.log('success', data)
               toast.success('Congrats!!New Fruit added successfully')
        })

        e.target.reset()
    };
    return (
        <div style={{marginRight:'10%'}} className='mt-10 ml-36 '>
            <form onSubmit={handleSubmit}>
             
                <div className="mb-6">
    <label>Email:</label>
                    <input value={user?.email}type="email" id="text" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                
   <div className="mb-6">
    <label>Item Name:</label>
                    <input type="text" id="text" name='itemName' placeholder="item-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
   <div className="mb-6">
    <label>Item Image:</label>
                    <input type="text" id="text" name='itemImage' placeholder="give image url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
    <label>Price:</label>
                    <input type="number" id="text" name='price' placeholder="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
   <div className="mb-6">
    <label>Quantity:</label>
                    <input type="number" id="text" name='quantity' placeholder="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
   <div className="mb-6">
    <label>Sold:</label>
                    <input type="number" id="text" name='sold' placeholder="sold" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
  
   <div className="mb-6">
    <label>Supplier:</label>
                    <input type="text" id="text" name='supplier' placeholder="supplier-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
   <div className="mb-6">
    <label>Description:</label>
                    <textarea rows="10" cols="80"type="text" id="text" name='description' placeholder="write about the items" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                


  <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"value='Add'/>
            </form>
            <button onClick={() =>navigate('/manageItem')}className=' mt-5  ml-2 text-white bg-[#1303f7] border-2 border-transparent hover:border-2  font-medium hover:font-medium px-10 py-2 cursor-pointer rounded-md' >ManageItem </button>
            <ToastContainer/>
        </div>
    );
};

export default AddItems;