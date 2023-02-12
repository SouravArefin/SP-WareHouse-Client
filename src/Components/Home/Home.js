import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../Hooks/useItems';
import Carousel from '../Carousel/Carousel';
import ManageItem from '../ManageItems/ManageItem';
import loader from '../../loading.gif'


import ThreePic from './ThreePic/ThreePic';
import image from '../../Greenbee/10080.png'
import BestSell from './BestSell/BestSell';
import Supplier from '../Supplier/Supplier';
const Home = () => {
    const { items, setItems } = useItems()
    // console.log(items);
    const handleDelete = id => {
        const confirmMsg = window.confirm("Are you sure?")

        if (confirmMsg) {
            console.log("delete with id", id)


            fetch(`https://sp-warehouse-server.up.railway.app/items/${id}`, {
                method: 'DELETE',


            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
            toast.success('Item delete successfully')
        }
        else {
            toast.error('ok,No problem')
        }
    }
    const navigate = useNavigate()
    return (
        <>

            {
                items.length === 0 ?
                    <div className='h-[80vh] w-[100ew] flex items-center justify-center'>
                        <img src={loader} alt='' />
                    </div>
                    :
                    <div>
                        <Carousel />

                        <img className='  mt-10 mx-auto' src={image} alt='' />
                        <h1 className='text-center text-gray-500 text-5xl sp-style mt-20'>Top 6 fruits in our stock</h1>
                        <div className='mt-28 bg-image relative  '>
                           
                            <div className='  grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                                {
                                    items.slice(0, 6).map(item => <ManageItem
                                        key={item._id}
                                        send={item}
                                        sendEvent={handleDelete}
                                    ></ManageItem>)
                                }
                            </div>
                            <button  className="happy bg-[#3005ee] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white" onClick={() => navigate('/manageItem')}>
                                See More
                            </button>

                            <BestSell />
                            <Supplier />
                            <ThreePic />
                        </div>
                    </div>
            }


        </>
    );
};

export default Home;