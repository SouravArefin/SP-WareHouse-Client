import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Carousel from '../Carousel/Carousel';
import ManageItem from '../ManageItems/ManageItem';

const Home = () => {
    const { items } = useItems()
   // console.log(items);
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