import React from "react";
import { VscAccount } from "react-icons/vsc";
import {FaPlay} from 'react-icons/fa';
import { Link } from "react-router-dom";


const EachvideoCard = ({items}) => {
    const snippet = items.snippet;
    const url = snippet.thumbnails.medium.url;
    const title = snippet.title;
    const channelTitle = snippet.channelTitle;
    const views = items.statistics.viewCount;
    let viewsCount = "";
    const id = items.id;
    const watch = id;


    
    if(views.length===6){
        viewsCount = views.slice(0,3)+"K";
    };
    if(views.length===7){
        viewsCount = views.slice(0,1)+"."+views.slice(1,2)+"M";
    };
    if(views.length===8){
        viewsCount = views.slice(0,2)+"M";
    };
    if(views.length===9){
        viewsCount = views.slice(0,3)+"M";
    };
    if(views.length===10){
        viewsCount = views.slice(0,1)+"."+views.slice(1,2)+"B";
    };


  return (
    <Link to={watch}>
    <div  className="h-[250px] w-[300px] p-5 ml-5 cursor-pointer mt-10 mb-2">
      <div className="h-[170px] w-[300px] ">
        <div className="h-[170px] w-[300px] absolute hover:bg-[#00000068] bg-[#00000000] opacity-0 hover:opacity-70 flex justify-center items-center">
        <FaPlay id="play" className="" color="white" size={60}/>
        </div>
        <img className="h-[full] w-[300px] " src={url} alt="/" />
      </div>
      
      <div className=" flex space-x-4">
        <div className="mt-3" >      
        <VscAccount size={40}/>
        </div>
        <div className="mt-2">
            <p className="font-extralight text-md ">{title.length>45?title.slice(0,44)+"...":title}</p>
            <p className="text-sm text-[#00000097] mt-1">{channelTitle.length>25?channelTitle.slice(0,24)+"...":channelTitle}</p>
            <div className="">
                <p className="text-sm text-[#00000097]">{viewsCount} views</p>
            </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default EachvideoCard;
