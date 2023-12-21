import { VStack, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const HireMeCard = (props) => {
  return (
    <VStack width="20%" align textAlign="center">
      <Image
        src={props.src}
        height="230px"
        width="220px"
        backgroundColor="white"
        borderRadius="2xl"
      ></Image>
      <Text fontSize="20px">{props.heading}</Text>
      <Text>{props.description}</Text>
    </VStack>
  );
};

HireMeCard.propTypes = {
  src: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HireMeCard;
