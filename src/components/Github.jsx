import GitHubCalendar from "react-github-calendar";
import { VStack, Heading } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";

const Github = () => {
  return (
    <VStack id="about" width={{ base: "100%", md: "100%", lg: "80%" }} pt={10}>
      <Zoom triggerOnce>
        <Heading
          py={10}
          color="#F56E0F"
          textDecoration="underline"
          textUnderlineOffset={5}
        >
          My Github Contributions
        </Heading>
      </Zoom>

      <Zoom triggerOnce>
        <GitHubCalendar username="Harshit-3905" fontSize={16} throwOnError />
      </Zoom>
    </VStack>
  );
};

export default Github;
