import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {MdHomeFilled} from 'react-icons/md';
import {MdOutlineExplore} from 'react-icons/md';
import {MdOutlineSubscriptions} from 'react-icons/md';
import {MdOutlineVideoLibrary} from 'react-icons/md';
import {VscHistory} from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Siderbar = () => {
  return (
    <div className='h-full w-[4.3%]  fixed left-0 top-0 '>
        <div className="h-full w-full bg-white flex flex-col space-y-10">
        <div>
          <AiOutlineMenu className='mt-4 ml-6 cursor-pointer' size={22}/>
        </div>
        <div className=' flex flex-col  items-center space-y-5'>
          
        <div className='h-full w-full flex flex-col items-center cursor-pointer hover:bg-[#00000034] -my-4 py-2'>
        <Link to="/" style={{"display":"flex","alignItems":"center","flexDirection": "column"}}>
          <MdHomeFilled className='content-center' size={25}/>
          <h1 className=''>Home</h1>
          </Link>
        </div>
        
        <div className='h-full w-full flex flex-col items-center cursor-pointer hover:bg-[#00000034] mt-2 py-2'>
          <MdOutlineExplore size={25}/>
          <h1>Explore</h1>
        </div>
        <div className='h-full w-full flex flex-col items-center cursor-pointer hover:bg-[#00000034]  py-2'>
          <MdOutlineSubscriptions size={25}/>
          <h1>Subs</h1>
        </div>
        <div className='h-full w-full flex flex-col items-center cursor-pointer hover:bg-[#00000034]  py-2'>
          <MdOutlineVideoLibrary size={25}/>
          <h1>Library</h1>
        </div>
        <div className='h-full w-full flex flex-col items-center cursor-pointer hover:bg-[#00000034]  py-2'>
          <VscHistory size={25}/>
          <h1>History</h1>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Siderbar