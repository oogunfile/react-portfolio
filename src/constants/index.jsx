import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import funny from "../assets/projects/funny2.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.
 With 1 year of hands-on project experience, I have honed my skills in front-end technologies like React and Next.js, 
 as well as back-end technologies like Node.js, express.js, MySQL and PostgreSQL. My goal is to leverage my 
 expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = ` I am a passionate problem solver and a dedicated graduate student pursuing a master's
 degree in Computer Science (expected to graduate in may2025). I am continuously honing my skills to build 
 innovative solutions and strive to learn and adapt to new challenges.
 I thrive in collaborative environments to deliver high-quality solutions. 
 Outside of academics and coding, I enjoy listening to music and spending quality time with my family.`


export const EXPERIENCES = [

  {
   title: `inverse matrix calculator`,
    description: `Built an inverse matrix calculator`,
    technologies: ["C++"],
  },
  {
    title: "Rock, Paper, Scissors game",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js.
     Designed and implemented RESTful APIs for data communication.`,
    technologies: ["Javascript", "HTML", "CSS", "EJS"],
  },
  {
    title: `Jokes.com Project`,
    description: 'Created a web application that interacts with a public API to get funny jokes.',
    technologies: ["Node.js","Express.js","Axios","API", "HTML", "CSS", "EJS"],
  },
  {
   
    title: "Distributed Chat Application",
    description: ` Utilized Node.js, Redis, ha-proxy, and socket.io technologies to simulate a scalable chat service.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
 
   {
     title: "Rock, Paper, Scissors game",
     image: project1,
     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js.
      Designed and implemented RESTful APIs for data communication.`,
     technologies: ["Javascript", "HTML", "CSS", "EJS"],
   },
   {
     title: `Jokes.com Project`,
     image: funny,
     description: 'Created a web application that interacts with a public API to get funny jokes.',
     technologies: ["Node.js","Express.js","Axios","API", "HTML", "CSS", "EJS"],
   },
   {
    
     title: "Distributed Chat Application",
     image: project2,
     description: ` simulated a scalable chat service that had various distributed system features.`,
     technologies: ["Node.js", "Redis", "ha-proxy", "socket.io"],
   },
   {
    title: `inverse matrix calculator`,
    image: project4,
     description: `Built an inverse matrix calculator`,
     technologies: ["C++"],
   },
   {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailWindCss"],
  },
  // {
  //   title: "E-Commerce Website",
  //   image: project1,
  //   description:
  //     "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  //   technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  // },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
 
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  linkdin: `https://www.linkedin.com/in/oluwaseun-ogunfile`,
  github: `https://github.com/oogunfile`
};
