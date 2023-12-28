import { Wrap, Heading, VStack } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import {
  GitIcon,
  GithubIcon,
  VSCodeIcon,
  NetlifyIcon,
  PostmanIcon,
} from "../miscellaneous/Icons";

const Others = () => {
  return (
    <VStack
      minheight="350px"
      width="400px"
      backgroundColor="#262626"
      borderRadius="2xl"
      p={3}
      border="1px solid #FBFBFB"
    >
      <Heading>Others</Heading>
      <Wrap justify="center" pt={4}>
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
