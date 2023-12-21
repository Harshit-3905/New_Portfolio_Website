import { HStack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SkillBlock = ({ icon: Icon, name }) => {
  return (
    <HStack>
      <Icon />
      <Text>{name}</Text>
    </HStack>
  );
};

SkillBlock.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillBlock;
