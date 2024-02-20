"use client"
import clsx from "clsx";
import React from 'react';
import PlatformCard from "./PlatformCard";

const Cell = ({ num }: { num: number }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
     className={clsx('relative ', {
        'hover:cursor-pointer': !isHovered, // Cursor pointer on hover if not already hovered
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >
        {false ?(
        <div className="absolute top-0 left-full mt-0 ml-2 z-0">
           <PlatformCard/>
        </div>
      ):null}
      <div
        className={clsx("h-[11px] w-[11px] rounded-sm mix-blend-difference z-50 ", {
          "bg-[#ffffffcc]": num >= 2,
          "bg-gradient-to-b shadow-inner from-[#4ade80] to-[#bbf7d0] first-letter:": num > 1 && num < 2,
          "bg-gradient-to-b shadow-inner from-[#4ade80] to-[#bbf7d0]": num <= 1,
        })}
      ></div>
      
    </div>
  );
};

export default Cell;
