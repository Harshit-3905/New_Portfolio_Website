import { VStack, Heading, Flex } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import SkillBlock from "./SkillBlock";

const Frontend = () => {
  return (
    <VStack>
      <Heading>Frontend</Heading>
      <Flex>
        <SkillBlock icon={FaReact} name="React JS" />
        <SkillBlock icon={SiRedux} name="Redux" />
        <SkillBlock icon={SiRedux} name="HTML" />
        <SkillBlock icon={SiRedux} name="CSS" />
        <SkillBlock icon={SiRedux} name="Javascript" />
        <SkillBlock icon={SiRedux} name="Bootstrap" />
        <SkillBlock icon={SiRedux} name="Chakra UI" />
      </Flex>
    </VStack>
  );
};

export default Frontend;
