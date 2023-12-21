import { VStack, Heading, Flex } from "@chakra-ui/react";
import Frontend from "./Skills/Frontend";
import Backend from "./Skills/Backend";
import ProblemSolving from "./Skills/ProblemSolving";
import Others from "./Skills/Others";

const Skills = () => {
  return (
    <VStack id="skills" width="80%" height="90vh">
      <Heading>Skills</Heading>
      <Flex>
        <Frontend />
        <Backend />
        <ProblemSolving />
        <Others />
      </Flex>
    </VStack>
  );
};

export default Skills;
