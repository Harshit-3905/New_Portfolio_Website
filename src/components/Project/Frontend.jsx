import { VStack } from "@chakra-ui/react";
import ProjectCard from "../miscellaneous/ProjectCard";
import BinaryBlogspic from "../../assets/Projects/BinaryBlogs.webp";
import PortfolioWebsitepic from "../../assets/Projects/PortfolioWebsite.webp";
import {
  ReactIcon,
  TailwindIcon,
  AppwriteIcon,
  ChakraIcon,
} from "../miscellaneous/Icons";

const Frontend = () => {
  return (
    <VStack width="100%" pt={10} gap={10}>
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
  );
};

export default Frontend;
