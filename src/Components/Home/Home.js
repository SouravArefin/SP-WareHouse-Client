import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../Hooks/useItems';
import Carousel from '../Carousel/Carousel';
import ManageItem from '../ManageItems/ManageItem';
import WhyMe from '../Why/WhyMe';
import Review from './Review/Review';

const Home = () => {
    const { items,setItems } = useItems()
   // console.log(items);
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
    const navigate=useNavigate()
    return (
        <div>
            <Carousel />
            <div className='mt-28'>
                <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Choose your valuable items..</h1>
                <h1 className='text-3xl text-green-700 font-medium text-center py-4'>Available in Stock</h1>
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

                <Review  />
                <WhyMe />
            </div>
        </div>
    );
};

export default Home;