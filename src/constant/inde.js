import {  SiFirebase, SiGmail, SiCss3 ,SiHtml5,SiTypescript, SiExpressvpn,SiMongodb,SiRedux, SiGnubash} from 'react-icons/si';
import { FaReact, FaJs, FaGitAlt,  FaLinkedin, FaStackOverflow, FaMedium, FaGithub , FaNode} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { Image } from '@chakra-ui/react';



const resume = {
    url: "https://drive.google.com/file/d/1j5xgh-Cs72nnWGCkVFi0pjG58Wmw3bkX/view?usp=sharing",
    icon: <CgAlbum />,
    name: "Resume"
}

const techStacks = [
 
    {
        name: "React JS",
        icon: <FaReact fontSize="20px" />,
        url: "https://reactnative.dev/",
    },{
    name: 'HTML',
    icon: <SiHtml5 fontSize="20px" />,
   
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
 },
 {
    name: 'CSS',
    icon: <SiCss3 fontSize="20px" />,
   
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
 },
 {
    name: 'Typescript',
    icon: <SiTypescript fontSize="20px" />,
   
    url: "https://www.typescriptlang.org/",
 },
 {
    name: 'Express JS',
    icon:  <Image
  
    boxSize='20px'
    src='https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'  
    alt='Dan Abramov'
  />,
   
    url: "https://expressjs.com/",
 },
 {
    name: 'Node JS',
    icon: <FaNode fontSize="20px" />,
   
    url: "https://nodejs.org/en/",
 },
 {
    name: 'MongoDB',
    icon: <SiMongodb fontSize="20px" />,
   
    url: "https://www.mongodb.com/",
 },
 {
    name: 'Redux JS',
    icon: <SiRedux fontSize="20px" />,
   
    url: "https://redux.js.org/",
 },
    {
        name: "Javascript",
        icon: <FaJs fontSize="20px" />,
        url: "https://www.javascript.com/",
    },
    {
        name: "Firebase",
        icon: <SiFirebase fontSize="20px" />,
        url: "https://firebase.google.com/",
    },
    {
        name: "CLI-Bash",
        icon: <SiGnubash fontSize="20px" />,
        url: "https://www.gnu.org/software/bash/",
    },
    {
        name: "Git & Github",
        icon: <FaGitAlt fontSize="20px" />,
        url: "https://www.gitlab.com/",
    },

]



const educations = [
    
]

const liveProjects = [
    {
        name: 'Cartify',
        imageUrl: 'https://i.postimg.cc/nzfhJVzz/cartify-Screen-Shot.png',
        alt: 'Cartify',
        summary: 'Cartify is a full-fledged e-commerce website it is fully responsive and built with React JS. it implements a cart section with global context with adaptive pricing. This is a Individual Project build and executed in 5 days. functionality.',
        githublink: 'https://github.com/harshu878/Cartify-React-Ecommerce-Site',
        livelink: 'https://candid-cassata-36c73b.netlify.app/',
        techStack : ['Chakra UI', "Context API", "React JS","Faker JS",]
    },
    {
        name: 'Student Management System',
        imageUrl: 'https://i.postimg.cc/yYCNJ4M9/Screenshot-987.png',
        alt: 'SMS',
        summary: "This is a Student Management System, a CRUD application where you can add student details and You can also manage student database in your browser's local storage.",
        githublink: 'https://github.com/harshu878/student-management-system',
        livelink: 'https://harshu878.github.io/student-management-system/',
        techStack : ['HTML', "CSS", "JavaScript", "Local Storage"]
    },
    {
        name: 'Lyst Clone',
        imageUrl: 'https://i.postimg.cc/YSCfLy4N/Screenshot-989.png',
        alt: 'SMS',
        summary: "Lyst.com is an apparel and accesories e-commerce website. It has a vast range of brands and styles under its hood. The shopping experience on this website is seamless and intuitive due to the website's responsiveness and user-friendly UI.",
        githublink: 'https://github.com/harshu878/Lyst-Website-Clone',
        livelink: 'https://harshu878.github.io/Lyst-Website-Clone/',
        techStack : ['HTML', "CSS", "JavaScript", "Local Storage"]
    },
    {
        name: 'Nutrimeter',
        imageUrl: 'https://i.postimg.cc/J7Z3j0jQ/sss-340.png',
        alt: 'SMS',
        summary: "Nutrimeter is a one stop solution for all health related information and to track your daily calories so It helps you to focus on your nutrition as a whole. it's a dynamic and responsive, full stack website built with react js, mongodb, express and nodejs.",
        githublink: 'https://github.com/harshu878/nutrimeter',
        livelink: 'https://nutrimeter.vercel.app/',
        techStack : [ "React JS", "Styled-Components" ,"Chakra UI", "NodeJS", "Express JS", "MongoDB" ]
    }
]



export { techStacks, resume, educations, liveProjects }