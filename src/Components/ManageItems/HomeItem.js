import React from 'react';
import useItems from '../../Hooks/useItems';
import ManageItem from './ManageItem';

const HomeItem = () => {
    const { items } = useItems()
    console.log(items,'items')
    return (
          <div>
             <div className='mt-28'>
            <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Choose your valuable items..</h1>
            <h1 className='text-3xl text-green-700 font-medium text-center py-4'>Available in Stock</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                    { 
                        items.map(item => <ManageItem
                            key={item._id}
                            send={item}
                        ></ManageItem>)
                    }
            </div>
        </div>
        </div>
    );
};

export default HomeItem;