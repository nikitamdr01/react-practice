"use client";

import { ThemeContext } from "@/context/themeContext";
import "./globals.css";
import { useState } from "react";


export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");
  return (
    <html lang="en">
      <body className="">
        <h1>Header</h1>
        <button onClick={() => setMode("light")}>Light 🌞</button>
        <button onClick={() => setMode("dark")}>Dark 🌙 </button>

        <ThemeContext.Provider value={mode}>{children}</ThemeContext.Provider>
      </body>
    </html>
  );
}