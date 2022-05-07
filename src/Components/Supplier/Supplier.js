import React from 'react';
import image from '../../ayon.jpg'
import image2 from '../../david.jpg'
import image3 from '../../monir.jpg'
import image4 from '../../shorif.jpg'
import image5 from '../../sabbir.jpg'
const Supplier = () => {
    return (
        <div className='mt-10 '>
            <h1 className='text-center text-3xl sp-style text-rose-700'>Supplier Information</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='shadow-xl mt-10 ml-5'>
     
     <div className='cursor-pointer rounded-lg bg-white px-5'>
     <img className="rounded-t-lg w-1/5 mx-auto hover:scale-110 transform duration-100 ease-linear" src={image} alt="" />
     <div className="spacer w-full bg-[#6D9900]"></div>
     <div className='text-center mt-3'>
              
             <h1 className='sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>Name:Ayon-Jodder</h1>
         <p className='sp-style  font-bold text-[#6D9900] mb-3'>Location: Dhaka</p>
         <p className='font-bold sp-style text-[#5f57a8] mb-5'>Number:01350000</p>
           
     </div>
    
     </div>
     
 </div>
            <div className='shadow-xl mt-10'>
     
     <div className='cursor-pointer rounded-lg bg-white px-5'>
     <img className="rounded-t-lg w-1/5 mx-auto hover:scale-110 transform duration-100 ease-linear" src={image2} alt="" />
     <div className="spacer w-full bg-[#6D9900]"></div>
     <div className='text-center mt-3'>
              
             <h1 className='sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>Name:David-parvez</h1>
         <p className='sp-style  font-bold text-[#6D9900] mb-3'>Location: Narsingdi</p>
         <p className='font-bold sp-style text-[#5f57a8] mb-5'>Number:01850000</p>
           
     </div>
    
     </div>
     
 </div>
            <div className='shadow-xl mt-10'>
     
     <div className='cursor-pointer rounded-lg bg-white px-5'>
     <img className="rounded-t-lg w-1/5 mx-auto hover:scale-110 transform duration-100 ease-linear" src={image3} alt="" />
     <div className="spacer w-full bg-[#6D9900]"></div>
     <div className='text-center mt-3'>
              
             <h1 className='sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>Name:Monirruzzaman</h1>
         <p className='sp-style  font-bold text-[#6D9900] mb-3'>Location: Sherpurpur</p>
         <p className='font-bold sp-style text-[#5f57a8] mb-5'>Number:01925716395</p>
           
     </div>
    
     </div>
     
 </div>
            <div className='shadow-xl mt-10 ml-5'>
     
     <div className='cursor-pointer rounded-lg bg-white px-5'>
     <img className="rounded-t-lg w-1/5 mx-auto hover:scale-110 transform duration-100 ease-linear" src={image4} alt="" />
     <div className="spacer w-full bg-[#6D9900]"></div>
     <div className='text-center mt-3'>
              
             <h1 className='sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>Name:Shorif-Uddin</h1>
         <p className='sp-style  font-bold text-[#6D9900] mb-3'>Location: Sylhet</p>
         <p className='font-bold sp-style text-[#5f57a8] mb-5'>Number:01850000</p>
           
     </div>
    
     </div>
     
 </div>
            <div className='shadow-xl mt-10'>
     
     <div className='cursor-pointer rounded-lg bg-white px-5'>
     <img className="rounded-t-lg w-1/5 mx-auto hover:scale-110 transform duration-100 ease-linear" src={image5} alt="" />
     <div className="spacer w-full bg-[#6D9900]"></div>
     <div className='text-center mt-3'>
              
             <h1 className='sp-style  text-lg md:text-xl font-bold text-gray-600 mb-1'>Name:Sabbir-Mahmud</h1>
         <p className='sp-style  font-bold text-[#6D9900] mb-3'>Location: Sirajganj</p>
         <p className='font-bold sp-style text-[#5f57a8] mb-5'>Number:01950000</p>
           
     </div>
    
     </div>
     
 </div>
        </div>
        </div>
        
    );
};

export default Supplier;