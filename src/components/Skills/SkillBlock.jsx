import { HStack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SkillBlock = ({ icon: Icon, name }) => {
  return (
    <HStack
      height="50px"
      backgroundColor="#1B1B1E"
      borderRadius="20px"
      justifyContent="center"
      px={5}
      border="1px solid #FBFBFB"
    >
      <Icon />
      <Text>{name}</Text>
    </HStack>
  );
};

SkillBlock.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillBlock;
