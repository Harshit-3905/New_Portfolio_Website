import { VStack } from "@chakra-ui/react";
import ProjectCard from "../miscellaneous/ProjectCard";
import TaskTrackerpic from "../../assets/Projects/TaskTracker.webp";
import {
  ReactIcon,
  ReduxIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  ChakraIcon,
} from "../miscellaneous/Icons";

const FullStack = () => {
  return (
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
    </VStack>
  );
};

export default FullStack;
