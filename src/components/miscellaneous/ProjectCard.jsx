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
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const ProjectCard = (props) => {
  return (
    <VStack
      width="95%"
      minH="450px"
      backgroundColor="#262626"
      borderRadius="2xl"
      padding={3}
      justifyContent="center"
      border="1px solid #FBFBFB"
    >
      <Heading fontSize="30px" textAlign="center" color="#F56E0F">
        {props.name}
      </Heading>
      <Flex
        direction={{ base: "column", md: "columns", lg: "row" }}
        pt={5}
        gap={5}
      >
        <Image
          src={props.image}
          height="300px"
          width={{ base: "100%", md: "100%", lg: "50%" }}
        ></Image>
        <VStack
          gap={3}
          alignItems="flex-start"
          width={{ base: "100%", md: "100%", lg: "50%" }}
        >
          <Text>{props.description}</Text>
          <Text fontSize="20px">Tech Stack :</Text>
          <HStack>
            {props.techStack.map((tech) => (
              <Icon as={tech} key={tech} />
            ))}
          </HStack>
          <HStack pt={3}>
            <Link href={props.liveLink} isExternal>
              <Button>Live</Button>
            </Link>
            <Link href={props.githubLink} isExternal>
              <Button>Github</Button>
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
