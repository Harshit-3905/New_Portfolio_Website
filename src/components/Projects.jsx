import { VStack, Heading } from "@chakra-ui/react";
import ProjectCard from "./miscellaneous/ProjectCard";

const Projects = () => {
  return (
    <VStack id="projects" width="80%" height="90vh">
      <Heading>Projects</Heading>
      <VStack width="100%">
        <ProjectCard
          name="Task Tracker -Your Productivity Companion"
          image=""
          description=""
        />
        <ProjectCard name="Portfolio Website" image="" description="" />
      </VStack>
    </VStack>
  );
};

export default Projects;
