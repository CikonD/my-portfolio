import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiRedis,
  SiSocketdotio,
  SiNodedotjs,
} from "react-icons/si";

// Placeholder image URLs (replace these with actual URLs if available)
const tnature = "https://via.placeholder.com/600/24f355";
const ecommerce_backend = "https://via.placeholder.com/600/92c952";
const realtime_chat = "https://via.placeholder.com/600/771796";
const skanderbraham = "https://via.placeholder.com/150";

// Navigation Links
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// Call to Action
export const callToAction = "https://www.linkedin.com/in/skanderbraham/";

// About Me
export const aboutMe = {
  name: "Skander Braham",
  description: "Full-Stack JavaScript Developer with a strong backend focus and a diverse background in entrepreneurship, logistics, and digital marketing.",
};

// Education List
export const educationList = [
  {
    id: "education-1",
    icon: SiJavascript,
    title: "Bachelor of Science in Computer Science",
    degree: "B.Sc. Computer Science",
    duration: "2015 - 2019",
    content1: "Graduated with honors from XYZ University.",
    content2: "Specialized in software engineering and data structures.",
  },
  {
    id: "education-2",
    icon: SiReact,
    title: "Master of Science in Software Engineering",
    degree: "M.Sc. Software Engineering",
    duration: "2019 - 2021",
    content1: "Completed a thesis on scalable web applications.",
    content2: "Focused on full-stack development and cloud computing.",
  },
];

// Experiences
export const experiences = [
  {
    id: "experience-1",
    company: "Tech Company A",
    title: "Software Engineer",
    duration: "2021 - Present",
    content: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
    ],
    logo: skanderbraham,
  },
  {
    id: "experience-2",
    company: "Tech Company B",
    title: "Backend Developer",
    duration: "2019 - 2021",
    content: [
      "Built and optimized backend services and APIs using Node.js and Express.",
      "Implemented caching strategies to improve application performance.",
    ],
    logo: skanderbraham,
  },
];

// Skills
export const skills = [
  { id: "skill-1", icon: SiJavascript, name: "JavaScript" },
  { id: "skill-2", icon: SiTypescript, name: "TypeScript" },
  { id: "skill-3", icon: SiPython, name: "Python" },
  { id: "skill-4", icon: SiReact, name: "React" },
  { id: "skill-5", icon: SiNextdotjs, name: "Next.js" },
  { id: "skill-6", icon: SiExpress, name: "Express.js" },
  { id: "skill-7", icon: SiMongodb, name: "MongoDB" },
  { id: "skill-8", icon: SiFirebase, name: "Firebase" },
  { id: "skill-9", icon: SiDocker, name: "Docker" },
  { id: "skill-10", icon: SiGit, name: "Git" },
  { id: "skill-11", icon: SiRedis, name: "Redis" },
  { id: "skill-12", icon: SiSocketdotio, name: "Socket.io" },
];

// Social Media Links
export const socialMedia = [
  {
    id: "social-1",
    icon: AiFillGithub,
    link: "https://github.com/CikonD",
  },
  {
    id: "social-2",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/skanderbraham/",
  },
  {
    id: "social-3",
    icon: AiFillMail,
    link: "mailto:skander.braham@example.com",
  },
];

// Stats
export const stats = [
  {
    id: "stats-1",
    title: "Projects Completed",
    value: "50+",
  },
  {
    id: "stats-2",
    title: "Years of Experience",
    value: "5+",
  },
  {
    id: "stats-3",
    title: "Open Source Contributions",
    value: "100+",
  },
];

// Blog Posts
export const blogPosts = [
  {
    id: "blog-1",
    title: "Understanding JavaScript Closures",
    date: "2023-01-15",
    summary: "A deep dive into closures in JavaScript and how they work.",
    link: "https://example.com/blog/javascript-closures",
  },
  {
    id: "blog-2",
    title: "A Guide to React Hooks",
    date: "2023-02-10",
    summary: "An introduction to React Hooks and how to use them effectively.",
    link: "https://example.com/blog/react-hooks",
  },
  {
    id: "blog-3",
    title: "Building RESTful APIs with Node.js",
    date: "2023-03-05",
    summary: "Learn how to build RESTful APIs using Node.js and Express.",
    link: "https://example.com/blog/nodejs-restful-apis",
  },
];

// Achievements
export const achievements = [
  {
    id: "achievement-1",
    title: "Top Developer Award",
    date: "2022-12-01",
    description: "Awarded for outstanding performance and contributions to the development team.",
  },
  {
    id: "achievement-2",
    title: "Best Open Source Contributor",
    date: "2021-11-15",
    description: "Recognized for significant contributions to open source projects.",
  },
  {
    id: "achievement-3",
    title: "Employee of the Year",
    date: "2020-10-20",
    description: "Honored as the employee of the year for exceptional work and dedication.",
  },
];

// Extra Curricular Activities
export const extraCurricular = [
  {
    id: "extra-1",
    title: "Hackathon Winner",
    date: "2021-09-10",
    description: "Won first place in the XYZ Hackathon for developing an innovative solution to a real-world problem.",
  },
  {
    id: "extra-2",
    title: "Volunteer Developer",
    date: "2020-08-15",
    description: "Volunteered as a developer for a non-profit organization, helping to build and maintain their website.",
  },
  {
    id: "extra-3",
    title: "Tech Conference Speaker",
    date: "2019-07-20",
    description: "Spoke at the ABC Tech Conference about the future of web development and emerging technologies.",
  },
];

// Projects
export const projects = [
  {
    id: "project-1",
    title: "Tnature – Recyclable Waste Collection App",
    image: tnature,
    stack: [
      { id: "tech-1", icon: SiNodedotjs, name: "Node.js" },
      { id: "tech-2", icon: SiExpress, name: "Express.js" },
      { id: "tech-3", icon: SiFirebase, name: "Firebase" },
      { id: "tech-4", icon: SiReact, name: "React Native" },
    ],
    content: "Developed Tnature, a mobile application designed for the collection of various recyclable items.",
    github: "https://github.com/CikonD/tnature",
  },
  {
    id: "project-2",
    title: "E-Commerce Backend System",
    image: ecommerce_backend,
    stack: [
      { id: "tech-1", icon: SiNodedotjs, name: "Node.js" },
      { id: "tech-2", icon: SiExpress, name: "Express.js" },
      { id: "tech-3", icon: SiMongodb, name: "MongoDB" },
      { id: "tech-4", icon: SiRedis, name: "Redis" },
    ],
    content: "Scalable architecture for high-traffic handling with advanced caching mechanisms.",
    github: "https://github.com/CikonD/ecommerce-backend",
  },
  {
    id: "project-3",
    title: "Real-Time Chat Application",
    image: realtime_chat,
    stack: [
      { id: "tech-1", icon: SiSocketdotio, name: "Socket.io" },
      { id: "tech-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "tech-3", icon: SiReact, name: "React" },
      { id: "tech-4", icon: SiMongodb, name: "MongoDB" },
    ],
    content: "Real-time messaging with WebSocket technology and user presence detection.",
    github: "https://github.com/CikonD/realtime-chat",
  },
];

// Open Source Contributions
export const openSourceContributions = [
  {
    id: "contribution-1",
    title: "Contribution Title 1",
    description: "Description of the contribution.",
    link: "https://github.com/CikonD/repo1",
  },
  {
    id: "contribution-2",
    title: "Contribution Title 2",
    description: "Description of the contribution.",
    link: "https://github.com/CikonD/repo2",
  },
];

// Repository Link
export const repoLink = "https://github.com/CikonD/portfolio";

// Resume Link
export const resumeLink = "https://docs.google.com/document/d/1X1FYf3kD9qqVt2koqyvruWsWtkfQQQkJ5UVSmlWUe2s/edit?usp=sharing";
