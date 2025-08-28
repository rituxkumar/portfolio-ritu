
import htmlLogo from "./html.png"

import javascriptLogo from "./javascript.png";
import reactjsLogo from "./react.png";
import reduxLogo from "./redux.png";
import tailwindcssLogo from "./tailwindcss.png";

import nodejsLogo from "./nodejs.png";
import expressjsLogo from "./ex.png";

import mongodbLogo from "./mc.png";


import cLogo from './c.png'
import cppLogo from "./cpp.png";

import pythonLogo from "./python.png";

import gitLogo from "./git.png";
import githubLogo from "./github.png";
import vscodeLogo from "./vscode.png";
import postmanLogo from "./postman.png";

import vercelLogo from "./vercel.png";
import nextjs from "./nextjs.png";


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
      title: "Grocery Web App",
      description:
        "A MERN-based Grocery Store web application where users can browse and purchase grocery items online. The platform also includes a dedicated seller dashboard, enabling vendors to manage their products, update stock, and monitor orders efficiently.",
      // image: freshto,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "Tailwind CSS", "JavaScript" , "Cloudinary"],
     
      url: "https://freshto-app.onrender.com/",
    },
    {
      id: 1,
      title: "JOB PORTAL",
      description:
        "A full-stack job portal built with the MERN stack where users can search and apply for jobs. Companies can register as admins and post job openings directly from their dashboards. The platform includes role-based access, authentication, and real-time job listings for a smooth hiring experience.",
      // image: job_portal,
      tags: ["HTML", "CSS", "JavaScript","React JS", "Node.js", "MongoDB", "Express" ,"Redux" ,"Cloudinary"],

      url: "https://job-portal-frontend-h1x0.onrender.com/",
    },
    
   
  ];
