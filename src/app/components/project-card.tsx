"use client";
import Image from "next/image";
import Arrow from "./../assets/arrow.svg";
import Project from "./../assets/project1.svg";
import clsx from "clsx";
import useMousePosition from "../utils/ueMousePosition";
import { motion } from "framer-motion";
import Mask from "./../assets/mask.svg"
import { useState } from "react";
import Packman from "./packman";
const ProjectCard = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="flex justify-between py-2 pt-10 px-1 relative space-x-10">
      <motion.div className="w-fit"  >
        <div className="flex space-x-[8rem] animate-custom cursor-pointer">
          <motion.div
            onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
            className={clsx(
              "text-7xl font-semibold mix-blend-difference text-font-primary z-20 text-opacity-90 font-grotesk trans1"
            )}
            style={{
              color:"#ebe7dd"
            }}
          >
            FANDB SYS
          </motion.div>
          <motion.div className={clsx("py-2 trans2 mix-blend-difference z-50")} onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}>
            <Image src={Arrow} alt="" height={40} width={40} />
          </motion.div>
        </div>
        <div className="px-1 flex justify-between pt-8  ">
          <div>Fullstack Developer</div>
          <div className="text-right ">Apr&apos;22 - Oct&apos;22</div>
        </div>
        <div className="text-2xl mt-4 font-grotesk-medium">
          Table management <br /> System <br/>
          {x} {y}
        </div>
      </motion.div>
      <div className="flex-0 w-fit rounded-md">
        <Image src={Project} alt="" height={220} width={220} className=" " />
      </div>

      {/* <motion.div className="fixed z-10 w-fit h-fit" style={{
         transformOrigin: "center center",
      }} animate={{
        x:x-130,
        y:y-160,
        scale: isHovered ? 2.5 : 1,
      }}>
        <Packman/>
      </motion.div> */}
    </div>
  );
};

export default ProjectCard;
