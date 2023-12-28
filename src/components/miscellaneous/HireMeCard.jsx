import { VStack, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const HireMeCard = (props) => {
  return (
    <VStack
      width="23%"
      height="400px"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor="#262626"
      borderRadius="2xl"
      border="1px solid #FBFBFB"
    >
      <Image
        src={props.src}
        height="230px"
        width="220px"
        backgroundColor="white"
        borderRadius="2xl"
      ></Image>
      <Text fontSize="20px" color="#F56E0F">
        {props.heading}
      </Text>
      <Text px={2}>{props.description}</Text>
    </VStack>
  );
};

HireMeCard.propTypes = {
  src: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HireMeCard;
