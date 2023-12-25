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
} from "../miscellaneous/Icons";

const Frontend = () => {
  return (
    <VStack
      height="350px"
      width="400px"
      backgroundColor="blue.400"
      borderRadius="2xl"
      p={3}
    >
      <Heading>Frontend</Heading>
      <Wrap justify="center" pt={4}>
        <SkillBlock icon={ReactIcon} name="React JS" />
        <SkillBlock icon={ReduxIcon} name="Redux" />
        <SkillBlock icon={HTMLIcon} name="HTML" />
        <SkillBlock icon={CSSIcon} name="CSS" />
        <SkillBlock icon={JSIcon} name="Javascript" />
        <SkillBlock icon={ChakraIcon} name="Chakra UI" />
        <SkillBlock icon={BootstrapIcon} name="Bootstrap" />
      </Wrap>
    </VStack>
  );
};

export default Frontend;
