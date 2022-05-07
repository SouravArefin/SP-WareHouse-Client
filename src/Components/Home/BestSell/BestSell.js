import React from 'react';
import image from '../../../Greenbee/10033.jpg'
import image1 from '../../../Greenbee/10034.jpg'
import image2 from '../../../Greenbee/10035.jpg'
import image3 from '../../../Greenbee/10028.jpg'
const BestSell = () => {
    return (
        <div className='mt-10'>
            <h1 className="sp-style text-center text-3xl text-green-500">Top Sell Fruits</h1> 
            <div className='grid w-2/3 mx-auto content-center md:grid-cols-2 grid-cols-1 mt-5 gap-10 '>
          
                <div className='text-center   '>
                    <img className=' w-full ' src={image} alt='' />
                </div>
                <div className='text-center  '>
                    <img className=' w-full    ' src={image2} alt='' />
                </div>
                <div className='text-center  '>
                    <img className=' w-full  ' src={image3} alt='' />
                </div>
                <div className='text-center  '>
                    <img className=' w-full  ' src={image1} alt='' />
                </div>
                
            
            
           
        </div>
</div>
        
     
    );
};

export default BestSell;