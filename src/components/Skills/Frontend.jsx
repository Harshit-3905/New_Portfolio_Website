import { VStack, Heading, Wrap } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import {
  ReactIcon,
  ReduxIcon,
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ChakraIcon,
  BootstrapIcon,
  TailwindIcon,
} from "../miscellaneous/Icons";

const Frontend = () => {
  return (
    <VStack
      minHeight="300px"
      width={{ base: "450px", md: "390px" }}
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
        <SkillBlock icon={ReactIcon} name="React JS" />
        <SkillBlock icon={ReduxIcon} name="Redux" />
        <SkillBlock icon={HTMLIcon} name="HTML" />
        <SkillBlock icon={CSSIcon} name="CSS" />
        <SkillBlock icon={JSIcon} name="Javascript" />
        <SkillBlock icon={ChakraIcon} name="Chakra UI" />
        <SkillBlock icon={BootstrapIcon} name="Bootstrap" />
        <SkillBlock icon={TailwindIcon} name="Tailwind CSS" />
      </Wrap>
    </VStack>
  );
};

export default Frontend;
