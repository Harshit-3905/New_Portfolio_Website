import { VStack, Heading } from "@chakra-ui/react";
import ProjectCard from "./miscellaneous/ProjectCard";
import TaskTrackerpic from "../assets/Projects/TaskTracker.webp";
import PortfolioWebsitepic from "../assets/Projects/PortfolioWebsite.webp";
import BinaryBlogspic from "../assets/Projects/BinaryBlogs.webp";
import {
  ReactIcon,
  ReduxIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  ChakraIcon,
  TailwindIcon,
  AppwriteIcon,
} from "./miscellaneous/Icons";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <VStack id="projects" width="80%" pt={20}>
      <Zoom>
        <Heading
          pt={5}
          color="#F56E0F"
          textDecoration="underline"
          textUnderlineOffset={5}
        >
          Projects
        </Heading>
      </Zoom>
      <VStack width="100%" pt={10} gap={10}>
        <ProjectCard
          name="Task Tracker - Your Productivity Companion"
          image={TaskTrackerpic}
          description="Meet your ultimate productivity ally – Task Tracker! Streamline tasks, conquer goals, and boost focus with advanced features like the Pomodoro timer. This isn't just a task manager; it's your shortcut to success. Ready to elevate your productivity game? Task Tracker is here to help you soar!"
          techStack={[
            ReactIcon,
            ReduxIcon,
            NodeIcon,
            ExpressIcon,
            MongoIcon,
            ChakraIcon,
          ]}
          liveLink="https://task-tracker-us2h.onrender.com/"
          githubLink="https://github.com/Harshit-3905/Task_Tracker"
        />
        <ProjectCard
          name="Binary Blogs - A Blogging Website"
          image={BinaryBlogspic}
          description="Crafted a dynamic blogging platform using React and Tailwind CSS, ensuring a seamless and visually appealing user experience. Integrated Appwrite for efficient backend functionalities, enhancing data management and user interactions. This project showcases a commitment to building engaging web applications with a focus on both aesthetics and functionality."
          techStack={[ReactIcon, TailwindIcon, AppwriteIcon]}
          liveLink="https://binary-blogs.onrender.com/"
          githubLink="https://github.com/Harshit-3905/Binary-Blogs"
        />
        <ProjectCard
          name="Portfolio Website"
          image={PortfolioWebsitepic}
          description="Explore my portfolio website – a curated space reflecting my passion for web development. Dive into interactive projects, seamless responsiveness, and a design optimized for every device. This is where technology meets creativity, defining my professional persona. Journey into my world of innovation now!"
          techStack={[ReactIcon, ChakraIcon]}
          liveLink="https://harshitjoshi.netlify.app/"
          githubLink="https://github.com/Harshit-3905/Portfolio_Website"
        />
      </VStack>
    </VStack>
  );
};

export default Projects;
