import { VStack, Heading, Wrap } from "@chakra-ui/react";
import Frontend from "./Skills/Frontend";
import Backend from "./Skills/Backend";
import ProblemSolving from "./Skills/ProblemSolving";
import Others from "./Skills/Others";
import { Fade, Zoom } from "react-awesome-reveal";

const Skills = () => {
  return (
    <VStack id="skills" width="80%" pt={10}>
      <Zoom>
        <Heading
          pt={10}
          color="#F56E0F"
          textDecoration="underline"
          textUnderlineOffset={5}
        >
          Skills
        </Heading>
      </Zoom>
      <Wrap width="100%" pt={10} justify="center" spacing={20}>
        <Fade direction="left">
          <Frontend />
        </Fade>
        <Fade direction="right">
          <Backend />
        </Fade>
      </Wrap>
      <Wrap width="100%" pt={10} justify="center" spacing={20}>
        <Fade direction="left">
          <ProblemSolving />
        </Fade>
        <Fade direction="right">
          <Others />
        </Fade>
      </Wrap>
    </VStack>
  );
};

export default Skills;
