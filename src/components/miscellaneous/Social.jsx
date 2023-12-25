import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Social = ({ icon: Icon }) => {
  return (
    <Flex
      backgroundColor="red.500"
      borderRadius="full"
      height="60px"
      width="60px"
      alignItems="center"
      justifyContent="center"
    >
      <Icon />
    </Flex>
  );
};

Social.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default Social;
