import { useEffect, useState } from "react";
import { motion, useAnimation , SVGMotionProps } from "framer-motion";

const Pacman = () => {
  const [isGameModeOn, setIsGameModeOn] = useState<boolean>(true);
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({ pathLength: 1 });
  };

  useEffect(()=>{
    startAnimation();
  },[])

  const x=25;
  const y=25;
  const rotatePropsTop = {
    initial: { transform: 'rotate(0deg)' },
    animate: { transform: 'rotate(-30deg)' },
    transition: { duration: 0.175, repeat: Infinity, repeatType: 'reverse' },
  };

  const rotatePropsBottom = {
    initial: { transform: 'rotate(0deg)' },
    animate: { transform: 'rotate(30deg)' },
    transition: { duration: 0.175, repeat: Infinity, repeatType: 'reverse' },
  };

  return (
    <div>
      {isGameModeOn ? (
        <>
         <div className="h-[30px] w-[30px]">
          <svg
            width="50"
            height="50"
            viewBox="0 0 140 140"
            fill="#282828"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="70" cy="70" r="69.5" fill="#282828" />
          </svg>
        </div>
        </>
     
      ) : (
        <div className="h-[30px] w-[30px]">
          <svg
            width="50"
            height="50"
            viewBox="0 0 140 140"
            fill="#282828"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="70" cy="70" r="69.5" fill="#282828" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Pacman;
