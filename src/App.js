import React,{ useState, useEffect } from "react";
import Main from "./components/mainbody/Main";
import Nav from "./components/Nav";
import Siderbar from "./components/Sidebar";
import {Routes,Route} from 'react-router-dom';

function App() {
const [data, setData] = useState();
const [bool, setBool] = useState(false);
const [search,setSearch] = useState("");
const [searchdata,setSearchdata] = useState();
const [searchbool,setSearchbool] = useState(false);
const [searchbtnBool,setSearchbtnBool] = useState(true);

const btnHandler = (bool)=>{
  setSearchbtnBool(bool);
}
// const apiKey = process.env.API_KEY;
const url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&key=AIzaSyAcHu3NpiTz8jhmf083iW76zKJKyG97_xE`;
const fetchdata = async ()=>{
  const response = await fetch(url);
  const apidata = await response.json();
  const items = apidata.items;
  setData(items);
  setBool(!bool);
  console.log(items);
};


useEffect(()=>{
 fetchdata();
},[]);

const fetchingSearch = async ()=>{
  const output = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=20&order=relevance&q=${search}&safeSearch=moderate&type=video&key=AIzaSyAcHu3NpiTz8jhmf083iW76zKJKyG97_xE`);
  const maindata = await output.json();
  const arryofdata = maindata.items;
  setSearchdata(arryofdata);
  setSearchbool(true);
}

useEffect(()=>{
  fetchingSearch();
},[searchbtnBool]);

const inputHandler =(e)=>{
setSearch(e.target.value);
}
  return (
    <>
    <div className="h-full w-full flex flex-col">
    <Nav
   inputHandler={inputHandler}
   search={search}
   btnHandler={btnHandler}
   searchbtnBool={searchbtnBool}
    />
    <div className="flex">
    <Siderbar/>
    <Routes>
      <Route path="*" element={
    <Main
    data={data}
    bool={bool} 
    search={search}
    searchdata={searchdata}
    searchbool={searchbool}
    />}/></Routes>
    </div>
    </div>
    </>
  );
}

export default App;
