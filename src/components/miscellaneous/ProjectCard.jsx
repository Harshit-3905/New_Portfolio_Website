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

const ProjectCard = (props) => {
  return (
    <VStack
      width={{ base: "100%", md: "95%" }}
      minH="450px"
      backgroundColor="#262626"
      borderRadius="2xl"
      padding={3}
      justifyContent="center"
      border="1px solid #FBFBFB"
    >
      <Heading
        fontSize={{ base: "20px", md: "35px" }}
        textAlign="center"
        color="#F56E0F"
      >
        {props.name}
      </Heading>
      <Flex
        direction={{ base: "column", md: "columns", lg: "row" }}
        pt={5}
        gap={5}
      >
        <Image
          src={props.image}
          height={{ base: "200px", md: "300px" }}
          width={{ base: "100%", md: "100%", lg: "50%" }}
        ></Image>
        <VStack
          gap={3}
          textAlign={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "100%", lg: "50%" }}
        >
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
                rightIcon={<CgScreen />}
                backgroundColor="#F56E0F"
                borderRadius="xl"
                border="1px solid #F56E0F"
                _hover={{ color: "#F56E0F", backgroundColor: "#262626" }}
                height="35px"
              >
                Live
              </Button>
            </Link>
            <Link href={props.githubLink} isExternal>
              <Button
                rightIcon={<FaGithub />}
                backgroundColor="#F56E0F"
                borderRadius="xl"
                border="1px solid #F56E0F"
                _hover={{ color: "#F56E0F", backgroundColor: "#262626" }}
                height="35px"
              >
                Github
              </Button>
            </Link>
          </HStack>
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
