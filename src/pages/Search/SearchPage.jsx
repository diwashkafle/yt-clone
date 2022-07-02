import React, {useEffect, useState}from 'react';
import {Routes,Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Searchlist from './Searchlist'

const SearchPage = ({search,searchdata,searchbool}) => {

  return (
    <div className='h-[full] w-[95.7%] bg-[whitesmoke] relative ml-[4.3vw] flex flex-col mt-14'>
           {searchbool && searchdata.map((item)=>{
            return <Searchlist
             items={item}
             key={uuidv4()}/>
           })
        }    
    </div>
  )
}

export default SearchPage