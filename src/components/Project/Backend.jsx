import { VStack } from "@chakra-ui/react";
import ProjectCard from "../miscellaneous/ProjectCard";
import VideoTubePic from "../../assets/Projects/VideoTube.webp";
import {
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  RedisIcon,
  DockerIcon,
} from "../miscellaneous/Icons";

const Backend = () => {
  return (
    <VStack width="100%" pt={10} gap={10}>
      <ProjectCard
        name="VideoTube - Youtube Backend Clone"
        image={VideoTubePic}
        description="YouTube backend clone, boasts robust features including user authentication with JWT tokens, advanced data manipulation with MongoDB aggregation pipelines, and optimized performance with pagination. Leveraging Redis for caching and Docker for containerization, it ensures seamless data interaction, prioritizing efficiency and security in video content handling."
        techStack={[NodeIcon, ExpressIcon, MongoIcon, RedisIcon, DockerIcon]}
        liveLink="https://documenter.getpostman.com/view/25112902/2s9Yywdz2v"
        githubLink="https://github.com/Harshit-3905/VideoTube-Backend"
      />
    </VStack>
  );
};

export default Backend;
