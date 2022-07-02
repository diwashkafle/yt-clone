import React from 'react';
import EachvideoCard from './EachvideoCard';
import { v4 as uuidv4 } from 'uuid';
import { Routes,Route } from 'react-router-dom';
import Watch from "./Watch";
import SearchPage from '../../pages/Search/SearchPage';

const Main = ({data,bool,search,searchdata,searchbool}) => {
  
  return (
    <div className='h-[full] w-[95.7%] bg-[whitesmoke] relative ml-[4.3vw] grid grid-cols-4 mt-14'>
      <Routes>
        <Route path='/' element={
           bool && data.map((item)=>{
            return <EachvideoCard
             items={item}
             key={uuidv4()}
             />
           })
        } />
     <Route path=":id" element={<Watch
     data={data}/>}/>

     <Route path='/search' element={
      <SearchPage
      search={search}
      searchbool={searchbool}
      searchdata={searchdata}
      />
    }/>
      
</Routes>
    </div>
  )
}

export default Main