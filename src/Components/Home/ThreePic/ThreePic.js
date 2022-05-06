import React from 'react';
import pic1 from '../../../Greenbee/10005.png'
import pic2 from '../../../Greenbee/10006.png'
import pic3 from '../../../Greenbee/10007.png'
const ThreePic = () => {
    return (
        <div className='flex justify-evenly mt-5'>
          <img src={pic1} alt=''/>
          <img src={pic2} alt=''/>
          <img src={pic3} alt=''/>
        </div>
    );
};

export default ThreePic;
