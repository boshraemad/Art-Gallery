import api from "./axiosInstance";
import { useState } from "react";
import axios from 'axios';
const apiKey=import.meta.env.VITE_API_KEY;


function HomePage(){
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const handleSeachChange=(value)=>{
        setSearch(value);
        console.log(search);
    }

    const getSearchData=async()=>{
        try{
            const res=await api.get(`?key=${apiKey}&q=${search}&image_type=photo`);
            setData(res?.data.hits);
        }catch(error){
            console.log(error);
        }
    }
    const dataList=data.map((item)=>{
        return(
            
                // <h2 key={item.id}>{item.likes}</h2>
                <img key={item.id} src={item.imageUrl}></img>
            
        );
    })
    console.log(dataList);
    return(
        <>
            <form className="max-w-md mx-auto mt-20" onSubmit={(e)=>{e.preventDefault()}}>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none" placeholder="Search Mockups, Logos..." required onChange={(e)=>{handleSeachChange(e.target.value)}} />
                    <button onClick={()=>{getSearchData()}} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <div className="mt-3 grid grid-cols-4 gap-2 w-full p-4 place-items-center">
                 {dataList}
            </div>
        </>
    )
}

export default HomePage;