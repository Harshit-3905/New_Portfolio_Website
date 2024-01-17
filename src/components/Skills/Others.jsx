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
      minHeight="300px"
      width={{ base: "100%", md: "390px" }}
      backgroundColor="#262626"
      borderRadius="2xl"
      p={3}
      border="1px solid #FBFBFB"
    >
      <Heading
        fontSize="30px"
        color="#F56E0F"
        textDecoration="underline"
        textUnderlineOffset={5}
      >
        Others
      </Heading>
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
