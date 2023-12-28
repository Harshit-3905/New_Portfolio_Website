import {
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Box,
  Link,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Social from "./miscellaneous/Social";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
} from "./miscellaneous/Icons";
import homeAnimated from "../assets/home-animated.gif";

const Home = () => {
  const [typetext, setTypetext] = useState("");
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = [
    "Full Stack Developer",
    "Open Source Enthusiast",
    "Competitive Coder",
  ];

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (textIndex === textArray[textArrayIndex].length - 1) {
        setIsDeleting(true);
      }
      if (textIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setTextArrayIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
      if (isDeleting) {
        setTypetext((text) => text.slice(0, Math.max(0, textIndex - 1)));
        setTextIndex((prevIndex) => Math.max(0, prevIndex - 1));
      } else {
        setTypetext((text) => text + textArray[textArrayIndex][textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      }
    }, 150);
    return () => clearTimeout(typingTimeout);
  }, [typetext, textIndex, isDeleting, textArrayIndex, textArray]);

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
        <Box alignItems="flex-start" pl={{ base: "5", md: "20" }}>
          <Text fontSize="30px">Hey!</Text>
          <Text fontSize="40px">I&apos;m Harshit Joshi</Text>
          <Text fontSize="30px">{typetext}|</Text>
          <Link
            href="https://drive.google.com/file/d/1k3ept5svEKYSsri7GLkIaHmsWGHyNNyl/view?usp=sharing"
            isExternal
          >
            <Button mt={5}>Resume</Button>
          </Link>
          <HStack pt={5} gap={3}>
            <Link
              href="https://www.linkedin.com/in/harshit-joshi-40953321b/"
              isExternal
            >
              <Social icon={LinkedInIcon} />
            </Link>
            <Link href="https://github.com/Harshit-3905" isExternal>
              <Social icon={GithubIcon} />
            </Link>
            <Link href="https://twitter.com/Harshit3905" isExternal>
              <Social icon={TwitterIcon} />
            </Link>
            <Link href="#contact">
              <Social icon={MailIcon} />
            </Link>
          </HStack>
        </Box>
      </VStack>
      <Box
        width={{ base: "100%", md: "50%", lg: "50%" }}
        alignItems="center"
        justifyContent="center"
        pl={{ base: "5", md: "20" }}
      >
        <Image
          src={homeAnimated}
          height="400px"
          width="400px"
          backgroundBlendMode={true}
          backgroundColor="transparent"
          alt="Photo"
        ></Image>
      </Box>
    </Flex>
  );
};

export default Home;
