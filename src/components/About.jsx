import { VStack, HStack, Heading, Flex, Text, Image } from "@chakra-ui/react";
import MyImage from "../assets/HarshitImage.jpeg";

const About = () => {
  return (
    <VStack id="about" width="80%" pt={10}>
      <Heading pt={10}>About</Heading>
      <HStack width="100%" py={20}>
        <Flex width="50%" alignItems="center" justifyContent="center">
          <Image
            src={MyImage}
            alt="My Image"
            width="300"
            height="300"
            borderRadius="full"
          />
        </Flex>
        <VStack width="50%" textAlign="left" padding={6} borderRadius="lg">
          <Text fontWeight="bold" fontSize="xl">
            Hi, I&apos;m Harshit!
          </Text>
          <Text fontSize="lg">
            I am a passionate developer and a third-year Information Technology
            undergraduate student at Kalyani Government Engineering College.
          </Text>
          <Text fontSize="lg">
            My aspiration is to make a positive impact on the people around me
            through personal projects, internships, hackathons, and various
            experiences.
          </Text>
          <Text fontSize="lg">
            As a self-taught developer, I am deeply passionate about web
            development and problem-solving. My strong background in software
            development has led me to work on a diverse range of projects.
          </Text>
          <Text fontSize="lg">
            Feel free to reach out to me at{" "}
            <strong>harshitjoshidev@gmail.com</strong>.
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default About;
