"use client";

import clsx from "clsx";
import { randomInt } from "crypto";
import React, { useEffect } from "react";
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Cell = ({ value }: { value: number }) => {
  return (
    <div
      className={clsx("h-[12px] w-[12px] rounded-sm", {
        "bg-[#2b2a2a]": value === 1,
        "bg-[#e4e4e4]": value === 0,
      })}
    ></div>
  );
};

const generateField = ({ array }: { array: number[][] }) => {
  return (
    <div className="grid gap-2 ">
      {array.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((value, colIndex) => (
            <Cell key={colIndex} value={value} />
          ))}
        </div>
      ))}
    </div>
  );
};

const generateMap = ({ row, col }: { row: number; col: number }) => {
  const field = [];
  for (let i = 0; i < row; i++) {
    const rows = [];
    for (let j = 0; j < col; j++) {
      const num = getRandomInt(0, 1);
      rows.push(num);
    }
    field.push(rows);
  }
  return field;
};

const countLiveNeighbors = (array: number[][], x: number, y: number) => {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let liveNeighbors = 0;
  for (const [dx, dy] of directions) {
    const newX = x + dx;
    const newY = y + dy;
    if (
      newX >= 0 &&
      newX < array.length &&
      newY >= 0 &&
      newY < array[0].length
    ) {
      liveNeighbors += array[newX][newY];
    }
  }

  return liveNeighbors;
};

const newGenerationMap = ({ array }: { array: number[][] }) => {
    const nextGeneration = array.map((row, x) => 
      row.map((cell, y) => {
        const liveNeighbors = countLiveNeighbors(array, x, y);
        if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
          return 0;
        } else if (cell === 0 && (liveNeighbors === 3 || liveNeighbors === 6)) {
          return 1;
        } else {
          return cell; 
        }
      })
    );
  
    return nextGeneration;
  };

const Conway = () => {
  const row = 17;
  const col = 50;

  const [field, setField] = React.useState(generateMap({ row, col }));
  const [isRunning, setIsRunning] = React.useState(true);


  useEffect(()=>{
    if(!isRunning) return;
    const interval=setInterval(()=>{
         setField((prev)=>newGenerationMap({array:prev}))
    },100)
    return ()=>clearInterval(interval)
  },[isRunning])
  
  const handleReset = () => {
    setField(generateMap({ row, col }));
    setIsRunning(false);
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };


 

  return (
     <div>
      {generateField({ array: field })}
      <div className="mt-4">
        <button onClick={handlePlayPause} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded">
          {isRunning ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleReset} className="px-4 py-2 bg-red-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Conway;
