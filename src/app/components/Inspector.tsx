"use client"

import clsx from "clsx";
import React, { useState } from "react";

const Inspector = ({children}:{children:React.ReactNode}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
      console.log('Hovered over the card!');
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  return (
    <div className={clsx("rounded-sm w-auto h-min ",{
        "ring-[0.1rem]":isHovered,
        "ring-pink-500":isHovered,
        "ring-offset-8":isHovered,
    })} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
    </div>
  )
}

export default Inspector