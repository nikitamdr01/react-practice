"use client";
import { useState } from "react";
const Cities=(props)=>{
    let[city,setCity]=useState("");
    const ktm=()=>{
        setCity("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7OC4rNIgyJdGeGzB5YOtUqiBv5LV4mKVLg&s")
    }
    const bkt=()=>{
        setCity("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-952QshoT415FstVNqlXfuhA4gvuaLH0WA&s")
    }
    const ltr=()=>{
        setCity("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8E53FFAdEDLDEUBdW-UHXX9P2uZMkrRZTg&s")
    }
    return(
        <div>
            <h1 className="text-5xl">Cities</h1>
            <img src={city} className="h-60 w-60 pt-6" ></img>
            <button className="bg-slate-600 text-white px-4 py-3 mt-4 rounded-xl " onClick={ktm}>Kathmandu</button>
            <button className="bg-slate-600 text-white px-4 py-3 mt-4 m-5 rounded-xl" onClick={bkt}>Bhaktapur</button>
            <button className="bg-slate-600 text-white px-4 py-3 mt-4 m-5 rounded-xl " onClick={ltr}>Lalitpur</button>
        </div>
    );
};
export default Cities;