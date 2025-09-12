
import htmlLogo from "./html.png"

import javascriptLogo from "./javascript.png";
import reactjsLogo from "./react.png";
import reduxLogo from "./redux.png";
import tailwindcssLogo from "./tailwindcss.png";

import nodejsLogo from "./nodejs.png";
import expressjsLogo from "./ex.png";

import mongodbLogo from "./mc.png";
import StudyLoom from "./StudyLoom.png"


import cLogo from './c.png'
import cppLogo from "./cpp.png";

import pythonLogo from "./python.png";

import gitLogo from "./git.png";
import githubLogo from "./github.png";
import vscodeLogo from "./vscode.png";
import postmanLogo from "./postman.png";

import vercelLogo from "./vercel.png";
import nextjs from "./nextjs.png";

import brainfuel from "./brainfuel.png"
import focusflow from "./focusflow.png"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
        { name: "React JS", logo: reactjsLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "NextJS", logo: nextjs },
      
    
      { name: "Redux", logo: reduxLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
        { name: "NextJS", logo: nextjs },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
       { name: "JavaScript", logo: javascriptLogo },
      { name: "C", logo: cLogo },

      { name: "Python", logo: pythonLogo },

     
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", logo: vscodeLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },

      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

  export const projects = [
    {
      id: 0,
      title: "BrainFuel",
      description:
        "AI-Powered Blog Website -Developed a full-stack blog platform (MERN) where users can create and explore blogs on interesting topics, generate content using AI, and engage through an interactive comment system with secure authentication.",
      image: brainfuel,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "Tailwind CSS", "JavaScript" , "Cloudinary"],
     
      url: "https://brainfuel-dun.vercel.app/",
    },
    {
      id: 1,
      title:"FocusFlow",
      description:
        "To-Do App-(Next.js) – Built a task management application with a modern, responsive UI using Next.js. Designed an intuitive interface for adding, updating, and deleting tasks with real-time state management. Focused on a clean, minimal UI/UX for smooth user experience and efficient task organization, ",
      image: focusflow,
      tags: ["NextJS", "Tailwind-CSS", "JavaScript", "Node.js", "MongoDB","HTML" ],


      url: "https://focusflow01.vercel.app/",
    },


    {
      id: 2,
      title:"StudyLoom",
      description:
        "Course Selling [ StudyLoom 🚀]full-stack web application built using MongoDB, Express.js, React, and Node.js that enables instructors to create and manage courses while allowing students to browse, purchase, and learn seamlessly. The platform features secure authentication. ",
      image: StudyLoom,
      tags: ["Express","Cloudinary", "CSS", "JavaScript", "Node.js", "MongoDB","HTML" ],


      url: "https://ed-tech-eta-five.vercel.app/",
    },
    
   
  ];
