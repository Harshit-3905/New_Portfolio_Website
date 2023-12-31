import { Flex, Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Social = (props) => {
  const { icon } = props;
  return (
    <Flex
      backgroundColor="#151419"
      borderRadius="full"
      height="55px"
      width="55px"
      alignItems="center"
      justifyContent="center"
      border="1px solid #F56E0F"
      _hover={{ color: "#F56E0F" }}
    >
      <Icon as={icon} boxSize={8} />
    </Flex>
  );
};

Social.propTypes = {
  icon: PropTypes.func.isRequired,
};

export default Social;
