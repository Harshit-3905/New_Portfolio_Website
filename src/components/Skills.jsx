import { VStack, Heading, Wrap } from "@chakra-ui/react";
import Frontend from "./Skills/Frontend";
import Backend from "./Skills/Backend";
import ProblemSolving from "./Skills/ProblemSolving";
import Others from "./Skills/Others";

const Skills = () => {
  return (
    <VStack id="skills" width="80%" pt={10}>
      <Heading pt={10}>Skills</Heading>
      <Wrap width="100%" pt={10} justify="center" spacing={20}>
        <Frontend />
        <Backend />
      </Wrap>
      <Wrap width="100%" pt={10} justify="center" spacing={20}>
        <ProblemSolving />
        <Others />
      </Wrap>
    </VStack>
  );
};

export default Skills;
