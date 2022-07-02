import React from "react";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { RiVideoUploadLine } from "react-icons/ri";
import { MdApps } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = ({inputHandler,search,btnHandler,searchbtnBool}) => {

  const searchBtn = ()=>{
    return btnHandler(!searchbtnBool)
  }

  return (
    <div className="h-[9%] w-full flex justify-between mt-0 bg-white border-b-[1px] border-gray-400 fixed z-50">
      <div className="flex m-2 space-x-8">
        <AiOutlineMenu className="mt-1 ml-1 cursor-pointer" size={25} />
        <Link to="/">
        <div className="flex space-x-2 cursor-pointer">
          <BsYoutube color="red" size={34} />
          <h1 className="font-anton text-2xl font-extrabold tracking-tighter">YouTube</h1>
        </div>
        </Link>
      </div>
      <div className="border-[1px] border-gray-500 h-[45px] w-[600px] flex justify-center m-2">
        <input onChange={inputHandler} className="h-full w-full p-2 text-md outline-offset-0 outline-[#4f8aff]" type="text" placeholder="Search" value={search}/>
        <Link to='/search' >
          {search.length>2 && search!==" "?
          <button onClick={searchBtn} className="border-l-[1px] border-gray-500 bg-gray-200 px-4 h-full ">
          <AiOutlineSearch size={30} />
        </button>:<button disabled className="border-l-[1px] border-gray-500 bg-gray-200 px-4 h-full ">
          <AiOutlineSearch size={30} />
        </button>}
        
        </Link>
      </div>
      <div className="flex m-2 space-x-4">
        <div className="flex space-x-4 mt-2">
          <RiVideoUploadLine size={25} className="cursor-pointer" />
          <MdApps size={25} className="cursor-pointer" />
          <IoMdNotificationsOutline size={25} className="cursor-pointer" />
        </div>
        <MdAccountCircle size={40} color="gray" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Nav;
