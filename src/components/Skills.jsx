import { VStack, Heading, Grid } from "@chakra-ui/react";
import Frontend from "./Skills/Frontend";
import Backend from "./Skills/Backend";
import ProblemSolving from "./Skills/ProblemSolving";
import Others from "./Skills/Others";

const Skills = () => {
  return (
    <VStack id="skills" width="80%" height="90vh">
      <Heading>Skills</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} width="100%">
        <Frontend />
        <Backend />
        <ProblemSolving />
        <Others />
      </Grid>
    </VStack>
  );
};

export default Skills;
