import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';

const AddItems = () => {

    const [user] = useAuthState(auth)
    const handleSubmit = e => {
        e.preventDefault();
        
        const email = user?.email
        const name = e.target.itemName.value
        const img = e.target.itemImage.value
        const quantity = e.target.quantity.value
        const supplier = e.target.supplier.value
        const description = e.target.description.value
        const item = {  email,name,supplier,quantity,img,description, }
        console.log(item)


        fetch('http://localhost:4000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
         })
            .then(res => res.json())
           .then(data => {
               console.log('success', data)
               toast('item added successfully')
        })

        e.target.reset()
    };
    return (
        <div style={{margin: '20%' }}>
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
    <label>Quantity:</label>
                    <input type="number" id="text" name='quantity' placeholder="quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
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
            <ToastContainer/>
        </div>
    );
};

export default AddItems;