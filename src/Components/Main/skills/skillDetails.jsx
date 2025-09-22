import { FaCss3, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5, SiJavascript, SiTypescript } from "react-icons/si";
import canvaLogo from "../../../../public/assets/canva-logo.png";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export const skillDetails = [
  {
    icon: <SiHtml5 />,
    name: "HTML",
    color: "text-orange-400",
    description:
      "Defines the layout and organization of a web page by using elements such as headings, paragraphs, links, and forms.",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind",
    color: "text-teal-400",
    description:
      "Utility-first CSS framework that simplifies the process of designing responsive and modern web applications.",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    color: "text-yellow-400",
    background: "bg-black",
    description:
      "Utilized to add dynamic behavior to web applications such as manipulating HTML and CSS to respond to user actions.",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    color: "text-lightBlue",
    description:
      "Superset of JavaScript that adds static typing, interfaces, and advanced features to improve code quality and maintainability.",
  },
  {
    icon: <FaReact />,
    name: "React",
    color: "text-sky-400",
    description:
      "UI library used for building fast, dynamic, and reusable user interfaces using a component-based architecture.",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
    color: "text-black",
    description:
      "React framework that enables server-side rendering, static site generation, and optimized performance for modern web applications.",
  },
  {
    icon: <SiPrisma />,
    name: "Prisma",
    color: "text-black-600 ",
    description:
      "Open-source ORM that simplifies database access, provides type safety, and streamlines queries in application development.",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "text-green-500",
    description:
      "NoSQL database that stores data in flexible JSON-like documents, allowing scalable and efficient data management",
  },
  {
    image: canvaLogo,
    name: "Canva",
    description:
      "Design platform used for creating fast, visually engaging, and reusable graphic assets using a drag-and-drop interface and pre-built templates.",
  },
];
