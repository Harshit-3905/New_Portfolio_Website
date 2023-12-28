import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Social = ({ icon: Icon }) => {
  return (
    <Flex
      backgroundColor="#F56E0F"
      borderRadius="full"
      height="55px"
      width="55px"
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
