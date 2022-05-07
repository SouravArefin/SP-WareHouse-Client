import React from 'react';
import pic1 from '../../../Greenbee/10005.png'
import pic2 from '../../../Greenbee/10006.png'
import pic3 from '../../../Greenbee/10007.png'
import Type from './Type';
const ThreePic = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-center word-spacing  text-sky-600 sp-style text-3xl'> <Type/>  </h1>
         <div className='md:flex mx-auto justify-evenly mt-5 '>
          <img className='mx-auto md:mx-0'src={pic1} alt=''/>
          <img className='mx-auto md:mx-0 md:my-0 my-2 'src={pic2} alt=''/>
          <img className='mx-auto md:mx-0 'src={pic3} alt=''/>
        </div>
      </div>
     
    );
};

export default ThreePic;
