import React, { useState } from 'react';
import { MdAccountCircle } from "react-icons/md";


const Searchlist = ({items}) => {
  const thumnnail_search= items.snippet.thumbnails.medium.url;
  const videotitle = items.snippet.title;
  const videodescription = items.snippet.description;
  const channeltitle = items.snippet.channelTitle;
  console.log(thumnnail_search)
  return (
    <div className='flex w-[80vw] space-x-1'>
<div className='h-[200px] w-[350px]'>
  <img className=' p-2 bg-contain block' src={thumnnail_search} alt="" />
</div>
<div className='flex flex-col space-y-3'>
  <div className=''>
    <h1 className='text-xl'>{videotitle}</h1>
  </div>
  <div className='flex space-x-1'>
    <div>
      <MdAccountCircle  size={30}/>
    </div>
    <h1 className='text-sm text-gray-600 mt-1'>{channeltitle}</h1>
  </div>
  <div className=''>
    <p className='text-sm text-gray-600'>{videodescription.length>220?videodescription.slice(0,220)+"...":videodescription}</p>
  </div>
</div>
    </div>
  )
}

export default Searchlist