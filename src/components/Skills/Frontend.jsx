import { VStack, Heading, Wrap } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import {
  ReactIcon,
  ReduxIcon,
  JSIcon,
  ChakraIcon,
  TailwindIcon,
  NextJsIcon,
  TypescriptIcon,
} from "../miscellaneous/Icons";

const Frontend = () => {
  return (
    <VStack
      minHeight="300px"
      width={{ base: "100%", md: "400px" }}
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
        Frontend
      </Heading>
      <Wrap justify="center" pt={4}>
        <SkillBlock icon={NextJsIcon} name="Next JS" />
        <SkillBlock icon={ReactIcon} name="React JS" />
        <SkillBlock icon={ReduxIcon} name="Redux" />
        <SkillBlock icon={JSIcon} name="Javascript" />
        <SkillBlock icon={TypescriptIcon} name="Typescript" />
        <SkillBlock icon={ChakraIcon} name="Chakra UI" />
        <SkillBlock icon={TailwindIcon} name="Tailwind CSS" />
      </Wrap>
    </VStack>
  );
};

export default Frontend;
