import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../Hooks/useItems';
import Carousel from '../Carousel/Carousel';
import ManageItem from '../ManageItems/ManageItem';



import ThreePic from './ThreePic/ThreePic';
import image from '../../Greenbee/10080.png'
const Home = () => {
    const { items,setItems } = useItems()
   // console.log(items);
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
    const navigate=useNavigate()
    return (
        <div>
            <Carousel />
            <ThreePic />
            <img className='mt-10 mx-auto'src={image} alt=''/>
           
            <div className='mt-28'>
            <h1 className='text-center text-gray-500 text-5xl sp-style mt-20'>Top 6 fruits in our stock</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                    {
                        items.slice(0, 6).map(item => <ManageItem
                            key={item._id}
                            send={item}
                            sendEvent={handleDelete}
                        ></ManageItem>)
                    }
                </div>
                <button className="happy bg-[#3005ee] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white" onClick={() => navigate('/manageItem')}>
                    See More
                </button>

                
            </div>
        </div>
    );
};

export default Home;