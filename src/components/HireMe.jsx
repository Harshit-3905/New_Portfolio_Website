import { VStack, Heading, Flex } from "@chakra-ui/react";
import HireMeCard from "./miscellaneous/HireMeCard";
import communicativeImage from "../assets/Hire/communicative.webp";
import collaborativeImage from "../assets/Hire/collaborative.webp";
import workEthicImage from "../assets/Hire/work-ethic.webp";
import selfMotivatedImage from "../assets/Hire/self-motivation.webp";
import { Zoom } from "react-awesome-reveal";

const HireMe = () => {
  return (
    <VStack width="80%" pt={10}>
      <Zoom triggerOnce>
        <Heading
          color="#F56E0F"
          textDecoration="underline"
          textUnderlineOffset={5}
        >
          Why Hire Me?
        </Heading>
      </Zoom>
      <Flex
        wrap={{ base: "wrap", lg: "nowrap" }}
        width="100%"
        height="100%"
        justifyContent="space-around"
        alignItems="center"
        pt={10}
        gap={{ base: "10", lg: "5" }}
      >
        <HireMeCard
          src={communicativeImage}
          heading="Communicative"
          description="I balance talking and listening hence ensuring effective
          communication."
        />
        <HireMeCard
          src={collaborativeImage}
          heading="Collaborative"
          description="Teamwork makes the dream work. Collaboration first, then work."
        />
        <HireMeCard
          src={workEthicImage}
          heading="Work Ethic"
          description="I don't wait for deadlines, deadlines wait for me."
        />
        <HireMeCard
          src={selfMotivatedImage}
          heading="Self Motivated"
          description="I put myself into action to achieve my goals."
        />
      </Flex>
    </VStack>
  );
};

export default HireMe;
