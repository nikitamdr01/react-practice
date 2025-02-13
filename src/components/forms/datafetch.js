"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Datafetch = () => {
    const [product,setProduct]=useState(null);

    const fetchData = async() => {
        try{
            const response =await axios.get("https://fakestoreapi.com/products/1");
            console.log(response.data,"data")
        }catch(error){
            console.log(error,"error")
        }
    }
    // response.then((value) => {
        //     setProduct(value.data);
        // }).catch((error) => {
        //     console.log(error, "error");
        // });
    
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetchData();
        console.log("First")
    }, []);
    // useEffect(() => {
    //     fetchData();
    //     console.log(count,"Second")
    // }, [count]);
    return (
        <div className='my-10'>
            <img src={product?.image} alt="" className="w-10 h-20"/>
            <p> {product?.title}</p>
            Datafetch={count}
            <button onClick={()=>{
                setCount(count+1);
            }}>Increment</button> 
        </div>
    )
}

export default Datafetch