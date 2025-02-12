import { CounterContext } from "@/context/counterContext";
import { ThemeContext } from "@/context/themeContext";
import React, { useContext } from "react";

const C = () => {
  const value = useContext(CounterContext);
  const mode = useContext(ThemeContext);

  return (
    <div className={mode === "light" ? "text-black" : "text-white"}>
      C Component = {value}
    </div>
  );
};

export default C;