import { HStack, Image, VStack, Heading, Text, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ProjectCard = (props) => {
  return (
    <HStack width="100%">
      <Image width="50%" src={props.image}></Image>
      <VStack width="50%">
        <Heading>{props.name}</Heading>
        <Text>{props.description}</Text>
        <HStack></HStack>
        <HStack>
          <Button>Live</Button>
          <Button>GitHub</Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
