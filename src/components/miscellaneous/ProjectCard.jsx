import {
  HStack,
  Image,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  Icon,
  Flex,
  Wrap,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { CgScreen } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const ProjectCard = (props) => {
  return (
    <VStack
      width={{ base: "100%", md: "95%" }}
      minH="450px"
      backgroundColor="#262626"
      borderRadius="2xl"
      padding={3}
      alignItems="center"
      justifyContent="center"
      border="1px solid #FBFBFB"
    >
      <Fade triggerOnce>
        <Heading
          fontSize={{ base: "20px", md: "35px" }}
          textAlign="center"
          color="#F56E0F"
        >
          {props.name}
        </Heading>
      </Fade>
      <Flex
        direction={{ base: "column", md: "columns", lg: "row" }}
        pt={5}
        gap={5}
        alignItems="center"
        justifyContent="center"
      >
        <Flex width={{ base: "100%", md: "100%", lg: "50%" }}>
          <Fade direction="left" triggerOnce>
            <Image
              src={props.image}
              height={{ base: "200px", md: "300px" }}
              width="100%"
              alt={props.name}
              loading="lazy"
            />
          </Fade>
        </Flex>
        <VStack
          gap={3}
          textAlign={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "100%", lg: "50%" }}
        >
          <Fade direction="right" triggerOnce>
            <Text fontSize={{ base: "15px", md: "16px" }}>
              {props.description}
            </Text>
            <Text
              fontSize={{ base: "18px", md: "22px" }}
              color="#F56E0F"
              textDecoration="underline"
              textUnderlineOffset={5}
            >
              Tech Stack:
            </Text>
            <Wrap>
              {props.techStack.map((tech) => (
                <Icon as={tech} key={tech} />
              ))}
            </Wrap>
            <HStack pt={3}>
              <Link href={props.liveLink} isExternal>
                <Button
                  fontSize={{ base: "15px", md: "18px" }}
                  rightIcon={
                    <Icon
                      as={CgScreen}
                      boxSize={{ base: "15px", md: "18px" }}
                    />
                  }
                  backgroundColor="#F56E0F"
                  borderRadius="xl"
                  border="1px solid #F56E0F"
                  _hover={{ color: "#F56E0F", backgroundColor: "#262626" }}
                  height="45px"
                >
                  Live
                </Button>
              </Link>
              <Link href={props.githubLink} isExternal>
                <Button
                  fontSize={{ base: "15px", md: "18px" }}
                  rightIcon={
                    <Icon
                      as={FaGithub}
                      boxSize={{ base: "15px", md: "18px" }}
                    />
                  }
                  backgroundColor="#F56E0F"
                  borderRadius="xl"
                  border="1px solid #F56E0F"
                  _hover={{ color: "#F56E0F", backgroundColor: "#262626" }}
                  height="45px"
                >
                  Github
                </Button>
              </Link>
            </HStack>
          </Fade>
        </VStack>
      </Flex>
    </VStack>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
};

export default ProjectCard;
