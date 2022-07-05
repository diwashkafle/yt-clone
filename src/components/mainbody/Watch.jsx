import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {BiLike} from 'react-icons/bi';
import {BiDislike} from 'react-icons/bi';
import {RiShareForwardLine} from 'react-icons/ri';
import {BsFlag} from 'react-icons/bs';
import { VscAccount } from "react-icons/vsc";
import { MdAccountCircle } from "react-icons/md";



const VideoplayCard = ({data}) => {
  window.scrollTo(0,0);
  const [commentvalue,setCommentvalue] = useState([]);
  const [value,setValue] = useState("");

  const onchangeHandler = (e)=>{
    setValue (e.target.value)
    setCommentvalue([...commentvalue,value]);
  }
  const params = useParams();
  const source = `https://www.youtube.com/embed/${params.id}?autoplay=1`
  const viewData = data.find((item)=>{return item.id===params.id});
  console.log(data);
  

  console.log(viewData);
  const views = viewData.statistics.viewCount;
  const title = viewData.snippet.title;
  const decription = viewData.snippet.description;
  const like = viewData.statistics.likeCount;
  const comment = viewData.statistics.commentCount;
  const channelName = viewData.snippet.channelTitle;
console.log(views);
let realviews;
let realcomments;
const viewsWithCommas = (views)=>{
  return realviews = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

viewsWithCommas(views)

const commentswithCommas = (comment)=>{
  return realcomments = comment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

commentswithCommas(comment)
let likeCount;
if(like.length===4){
  likeCount = like.slice(0,1)+like.slice(1,2)+"K";
};
if(like.length===5){
  likeCount = like.slice(0,2)+"K";
};
if(like.length===6){
  likeCount = like.slice(0,3)+"K";
};
if(like.length===7){
  likeCount = like.slice(0,1)+"."+like.slice(1,2)+"M";
};
if(like.length===8){
  likeCount = like.slice(0,2)+"M";
};
if(like.length===9){
  likeCount = like.slice(0,3)+"M";
};
if(like.length===10){
  likeCount = like.slice(0,1)+"."+like.slice(1,2)+"B";
};
  return (
    <div className=' w-[full] h-full ml-5 mt-8 '>
     <div className='w-[262%] border-b-[1px] border-gray-400 mb-4'>
        <iframe width="900" height="510"
        src={source} allowFullScreen title='Videos'/>
        <div className='mt-6'>
          <div className='w-[900px] space-y-3'>
            <h1 className='text-xl'>{title}</h1>
          <div className='flex justify-between'>
            <div className=''>
            <p className='text-sm text-[#000000b4]'>{realviews} views</p>
            </div>
           <div className='flex space-x-10 mb-4'>
            <div className='flex space-x-2'>
              <BiLike color='black' size={22}/>
              <div> {likeCount}</div>
             
              </div>
              <div className='flex space-x-2'>
              <BiDislike color='black' size={22}/>
              <p>Dislikes</p>
             
              </div>
              <div className='flex space-x-2'>
              <RiShareForwardLine color='black' size={22}/>
              <p>Share</p>
             
              </div>
              <div className='flex space-x-2'>
              <BsFlag color='black' size={22}/>
              <p>Report</p>
             
              </div>
           </div>
          </div>
          </div>
        </div>
      </div>
      <div className='w-[262%] border-b-[1px] border-gray-400 mb-4'>
        <div className='w-[900px]'>
          <div className='flex justify-between'>
          <div className='flex space-x-5'>
          <VscAccount size={45} color="black"/>
          <div className='mt-2'>
            <h1 className='tracking-tight text-xl '>{channelName}</h1>
            </div>
          </div>
          <div className='mr-3'>
            <button  className='tracking-wide bg-red-600 p-2 font-bold text-[whitesmoke]'>SUBSCRIBE</button>
          </div>
          </div>
          <div className='ml-16 mt-4 mb-8'>
          <p style={{whiteSpace: "pre-wrap"}}>
            {decription}
          </p>
          </div>
        </div>      
      </div>
      <div className='space-y-4 mb-6'>
      <div className='flex space-x-2'>
      <div className="">{realcomments}</div>
      <h1>Comments</h1>
      </div>
      <div className=' flex flex-row space-x-4 '>
        <div className='-mt-2'>
          <MdAccountCircle color='gray' size={45}/>
        </div>
        <div className='w-[262%] border-b-[1px] border-gray-400 '>
        <input onChange={onchangeHandler} className='outline-none bg-[whitesmoke] w-[855px]' type="text" placeholder='Add a comment....'/>
        </div>
      </div>
      </div>
      <div className='flex justify-end w-[900px] space-x-2'>
        <button className='p-2'>CANCEL</button>
        {value.trim()===0?
        <button  className='bg-gray-300 text-gray-500 p-2'>COMMENT</button>:
        <button  className='bg-[#057aff] text-black p-2'>COMMENT</button>}
      </div>
    </div>
  )
}

export default VideoplayCard