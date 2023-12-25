import { HStack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SkillBlock = ({ icon: Icon, name }) => {
  return (
    <HStack
      height="50px"
      backgroundColor="red.300"
      borderRadius="20px"
      justifyContent="center"
      px={5}
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
