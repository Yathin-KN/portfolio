'use client'
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
const Game = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(()=>{
     let Engine=Matter.Engine
     let Render=Matter.Render
     let World=Matter.World
     let Bodies=Matter.Bodies

     let engine=Engine.create({

     })

     let render = Render.create({
      element: boxRef.current as unknown as HTMLElement,
      engine: engine,
      canvas: canvasRef.current as unknown as HTMLCanvasElement,
      options: {
        width: 300,
        height: 300,
        background: 'rgba(255, 0, 0, 0.5)',
        wireframes: false,
      },
    });
  },[])
  return (
    <div
    ref={boxRef}
    style={{
      width: 300,
      height: 300,
    }}
  >
    <canvas ref={canvasRef} />
  </div>
  )
}

export default Game