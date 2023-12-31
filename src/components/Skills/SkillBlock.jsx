import { HStack, Text, Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SkillBlock = ({ icon, name }) => {
  return (
    <HStack
      height="50px"
      backgroundColor="#1B1B1E"
      borderRadius="20px"
      justifyContent="center"
      px={{ base: "3", md: "5" }}
      border="1px solid #FBFBFB"
      gap={{ base: "1", md: "2" }}
    >
      <Icon as={icon} boxSize={5} />
      <Text>{name}</Text>
    </HStack>
  );
};

SkillBlock.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillBlock;
