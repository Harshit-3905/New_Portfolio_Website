import { VStack, HStack, Text, Box, Link, Flex } from "@chakra-ui/react";
import Social from "./miscellaneous/Social";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import homeAnimatedwebm from "../assets/homeanimated.webm";
import homeAnimatedmp4 from "../assets/homeanimated.mp4";
import { Fade } from "react-awesome-reveal";
import Typewriter from "./miscellaneous/Typewriter";

const Home = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row", lg: "row" }}
      id="home"
      pt={{ base: "40", md: "0" }}
      width={{ base: "100%", md: "100%", lg: "80%" }}
      minH={{ base: "80vh", md: "90vh", lg: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        width={{ base: "100%", md: "50%", lg: "50%" }}
        alignItems="flex-start"
      >
        <Box
          alignItems="flex-start"
          pl={{ base: "5", md: "20" }}
          width="100%"
          color="#FBFBBF"
        >
          <Fade direction="left" triggerOnce>
            <Text fontSize={{ base: "30px", md: "35px" }}>Hey!</Text>
            <HStack fontSize={{ base: "40px", md: "45px" }}>
              <Text>I&apos;m </Text>
              <Text color="#F56E0F">Harshit Joshi</Text>
            </HStack>
            <Typewriter />

            <HStack pt={5} gap={3}>
              <Link
                href="https://www.linkedin.com/in/harshit-joshi-40953321b/"
                isExternal
              >
                <Social icon={FaLinkedin} />
              </Link>
              <Link href="https://github.com/Harshit-3905" isExternal>
                <Social icon={FaGithub} />
              </Link>
              <Link href="https://twitter.com/Harshit3905" isExternal>
                <Social icon={FaTwitter} />
              </Link>
              <Link href="#contact">
                <Social icon={IoIosMail} />
              </Link>
            </HStack>
          </Fade>
        </Box>
      </VStack>
      <Box
        width={{ base: "100%", md: "50%", lg: "50%" }}
        alignItems="center"
        justifyContent="center"
        pl={{ base: "5", md: "20" }}
      >
        <Fade direction="right" triggerOnce>
          <video autoPlay loop muted playsInline height="400px" width="400px">
            <source src={homeAnimatedwebm} type="video/webm" />
            <source src={homeAnimatedmp4} type="video/mp4" />
          </video>
        </Fade>
      </Box>
    </Flex>
  );
};

export default Home;
