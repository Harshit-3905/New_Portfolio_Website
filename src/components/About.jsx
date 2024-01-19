import { VStack, Heading, Flex, Text, Image } from "@chakra-ui/react";
import MyImage from "../assets/HarshitImage.webp";
import Tilt from "react-parallax-tilt";
import { Fade, Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <VStack id="about" width={{ base: "100%", md: "100%", lg: "80%" }} pt={10}>
      <Zoom triggerOnce>
        <Heading
          py={10}
          color="#F56E0F"
          textDecoration="underline"
          textUnderlineOffset={5}
        >
          About
        </Heading>
      </Zoom>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        width="100%"
        py={10}
      >
        <Flex
          width={{ base: "100%", md: "40%", lg: "40%" }}
          alignItems="center"
          justifyContent="center"
        >
          <Tilt>
            <Fade direction="left" triggerOnce>
              <Image
                src={MyImage}
                alt="My Image"
                width="350"
                height="350"
                borderRadius="full"
                loading="lazy"
              />
            </Fade>
          </Tilt>
        </Flex>
        <VStack
          width={{ base: "100%", md: "60%", lg: "60%" }}
          textAlign="center"
          borderRadius="lg"
          px={15}
          pt={{ base: "10", md: "0" }}
          gap={5}
        >
          <Fade direction="right" triggerOnce>
            <Text fontWeight="bold" fontSize="xl">
              Hi, I&apos;m Harshit!
            </Text>
            <Text fontSize="lg">
              I am a passionate developer and a Third-year Information
              Technology undergraduate student at Kalyani Government Engineering
              College.
            </Text>
            <Text fontSize="lg">
              My aspiration is to make a positive impact on the people around me
              through personal projects, internships, hackathons, and various
              experiences.
            </Text>
            <Text fontSize="lg">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </Text>
            <Flex flexDir={{ base: "column", lg: "row" }} columnGap={2}>
              <Text fontSize="lg">Feel free to reach out to me at </Text>
              <Text color="#F56E0F" fontSize="lg" fontWeight={600}>
                harshitjoshidev@gmail.com
              </Text>
            </Flex>
          </Fade>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default About;
