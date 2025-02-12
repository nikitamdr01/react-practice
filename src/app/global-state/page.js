"use client";

import React, { useContext, useState } from "react";
import A from "./components/A";
import { CounterContext } from "@/context/counterContext";
import { ThemeContext } from "@/context/themeContext";

const GlobalState = () => {
  const mode = useContext(ThemeContext);

  console.log(mode, "mode");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={mode === "light" ? "bg-white" : "bg-gray-500"}>
      <p className={mode === "light" ? "text-black" : "text-white"}>
        Global state page - {count}
      </p>
      <button className="my-2 py-2 px-3 bg-blue-400 mx-2" onClick={increment}>
        Increase
      </button>

      <CounterContext.Provider value={count}>
        <A />
      </CounterContext.Provider>
    </div>
  );
};

export default GlobalState;