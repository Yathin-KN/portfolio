
import { motion } from "framer-motion";
import ProjectCard from "./components/project-card";
import Leetcode from "./components/Leetcode";
import Game from "./components/game";
import Conway from "./components/Conway";
import Inspector from "./components/Inspector";
export default function Home() {
  
  return (
    <main className="w-full h-full min-h-screen bg-[white] pt-10 px-16 -z-50">
     <nav className="pb-8">
       <ul className="flex font-semibold justify-between" style={{
         color:"#ebe7dd"
       }}>
        <Inspector>
       <h2 className="text-xl uppercase underline-hover  font-thin font-mono cursor-pointer z-50 mix-blend-difference  " >
          Yathin KN
       </h2>
        </Inspector>
       <h2 className="text-xl uppercase  cursor-pointer underline-hover  z-50 font-thin font-mono mix-blend-difference  ">
          Work
       </h2>
       <h2 className="text-xl uppercase  cursor-pointer underline-hover  z-50  font-thin font-mono mix-blend-difference  ">
          About
       </h2>
       <h2 className="text-xl uppercase cursor-pointer underline-hover  z-50  font-thin font-mono mix-blend-difference  ">
          Contact
       </h2>
       
       </ul>
     </nav>
     <div className="space-y-6">
     <ProjectCard/>
     </div>
     <div className="flex justify-center  w-full  items-center">
     <Leetcode/>
     </div>
     <div>
      <Game/>
     </div>
     <Inspector>
     <Conway/>
     </Inspector>
    </main>
  );
}
