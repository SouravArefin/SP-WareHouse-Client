import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';
import image from '../../no-image.png'
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ManageItem from '../ManageItems/ManageItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const MyAccount = () => {
    const [user] = useAuthState(auth)
    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;
    const [items, setItems] = useState([])
    console.log(items);
    const navigate = useNavigate()
    const handleDelete = id => {
        const confirmMsg = window.confirm("Are you sure?")

        if (confirmMsg) {
            console.log("delete with id", id)
            
            
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
            toast('Item delete successfully')
        }
        else {
            toast('ok,No problem')
        }
    }
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email
            const url = `https://powerful-dawn-49608.herokuapp.com/singleItem?email=${email}`
           
            try {
                const { data } = await axios.get(url, {
                    headers: { 
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                
                setItems(data)
            } catch (error) {
                
                if (error.response.status === 403 || error.response.status === 401) {
                   signOut(auth)
                    navigate('/signin')
                }
                toast(error.message)
          }
        }
        getItems()

    },[])


    return (
        <div>
 <button style={{ marginTop: '15%'}} className='bg-[#690707] ml-2 hover:bg-[#141414]  px-4 py-2 mb-2  text-white'><Link to='/addItems'>Add New Items</Link></button>
        
        <div style={{marginTop:'5%',marginLeft: '10%',marginBottom: '10%',marginRight: '10%'}}>
 
         <div >
           
         <div className="custom-shadow">
                        <h1 className='text-center text-3xl pt-5 sp-style'>
                        <FontAwesomeIcon className="mr-5" icon={faUser} ></FontAwesomeIcon>
                            My Profile:</h1>
  <div className=" items-center mt-10 p-5 ">
                    <img style={{marginLeft: '45%'}}className="w-20 h-20 rounded-full  "src={userImg} alt=''/>
      <div >
                        {
                            user ? <h1 className='font-bold mt-5 text-center text-2xl sp-style'>Name: {user?.displayName}</h1>
                                :       <h1 className='font-bold mt-5 text-center text-2xl sp-style'>Name: Login-First</h1>
}
                        {
                            user ? <h1 className='font-bold mt-5 text-center text-2xl sp-style'>Email: {user?.email}</h1>
                        :  <h1 className='font-bold mt-5 text-center text-2xl sp-style'>Email: Login-First</h1>
                        
                        }
      
        </div>
      
  </div>
  

</div>
            </div>

                
                {
                    (items.length == 0) ?
                    
                    <h1 className='text-5xl item-msg sp-style mt-10'>Sorry <span className="text-sky-700">{user?.displayName}!!!  </span>you don't have any items</h1>
                       
                        :
                        <h1 className='text-5xl item-msg sp-style mt-10'>Hey <span className="text-sky-700">{user?.displayName}</span>, Here is your items</h1>
                }
          
            <div className='grid md:grid-cols-3 mt-10 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
            {
                items.map(item => <ManageItem
                    key={item._id}
                send={item}
                sendEvent={handleDelete}
                ></ManageItem>)
            }
            </div>
         
<ToastContainer/>
        </div>
      </div>
    );
};

export default MyAccount;