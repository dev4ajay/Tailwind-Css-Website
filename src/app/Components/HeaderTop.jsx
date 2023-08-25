import React from 'react'
import {BsLinkedin , BsFacebook , BsInstagram ,BsTwitter} from 'react-icons/bs';
function HeaderTop() {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>

        <div className='container py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>
                    <div className='header_top__icon_wrapper'>
                        <BsFacebook/>
                    </div>

                    <div className='header_top__icon_wrapper'>
                        <BsTwitter/>
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsInstagram/>
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsLinkedin/>
                    </div>
                    
                </div>
                <div className='text-gray-500 text-[12px]'>
                    <b>FREE SHIPPING</b>THIS WEEK ORDERM - $55
                </div>
     <div className='flex gap-4'>
 <select className='text-gray-500 text-[12px] w-[70px]' name='currency' id='currency'>
<option value='USD $'>USD $ </option>
<option value='USD $'>EUR &euro;	 </option>
<option value='INR'>INR</option>
 </select>

 <select className='text-gray-500 text-[12px] w-[70px]' name='language' id='language'>
<option value='english'>english </option>
<option value='hindi'>hindi </option>
<option value='franch'>Franch </option>
 </select>
 
      
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeaderTop