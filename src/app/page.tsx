
import { motion } from "framer-motion";
import ProjectCard from "./components/project-card";
export default function Home() {
  
  return (
    <main className="w-full h-full min-h-screen bg-[white] pt-10 px-16 -z-50">
     <nav className="pb-8">
       <ul className="flex font-semibold justify-between" style={{
         color:"#ebe7dd"
       }}>
       <h2 className="text-xl uppercase underline-hover  font-thin font-mono cursor-pointer  z-50 mix-blend-difference  " >
          Yathin KN
       </h2>
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
     <div className="">
     <ProjectCard/>
     </div>
     
    </main>
  );
}
