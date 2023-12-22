import { Wrap, Heading, VStack } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import {
  GitIcon,
  GithubIcon,
  VSCodeIcon,
  NetlifyIcon,
  PostmanIcon,
} from "./Icons";

const Others = () => {
  return (
    <VStack height="300px" width="400px" backgroundColor="blue.400">
      <Heading>Others</Heading>
      <Wrap justify="center">
        <SkillBlock icon={GitIcon} name="Git" />
        <SkillBlock icon={GithubIcon} name="GitHub" />
        <SkillBlock icon={VSCodeIcon} name="VS Code" />
        <SkillBlock icon={NetlifyIcon} name="Netlify" />
        <SkillBlock icon={PostmanIcon} name="Postman" />
      </Wrap>
    </VStack>
  );
};

export default Others;
