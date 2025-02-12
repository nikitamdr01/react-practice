"use client";
import { useState } from "react";
const States = (props) => {
    const { title } = props;
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-2);
        }
        else{
            setCount(0);
        }
    }
    return (
        <div>
            <h1 className="text-4xl">Counter Value={count}</h1>
            <button className="bg-slate-600 text-white px-4 py-3 mt-4 rounded-xl " onClick={increment}>Increment</button>
            <button className="bg-slate-600 text-white px-4 py-3 mt-4 m-3 rounded-xl" onClick={decrement}>Decrement</button>
        </div>
    );
};
export default States;