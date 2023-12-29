import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Social = ({ icon: Icon }) => {
  return (
    <Flex
      backgroundColor="#151419"
      borderRadius="full"
      height="55px"
      width="55px"
      alignItems="center"
      justifyContent="center"
      border="1px solid #F56E0F"
    >
      <Icon />
    </Flex>
  );
};

Social.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default Social;
