import { VStack, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const HireMeCard = (props) => {
  return (
    <VStack
      width={{ base: "250px", md: "300px", lg: "350px" }}
      height={{ base: "300px", md: "350px", lg: "400px" }}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor="#262626"
      borderRadius="2xl"
      border="1px solid #FBFBFB"
    >
      <Image
        src={props.src}
        width={{ base: "150px", md: "200px", lg: "220px" }}
        backgroundColor="white"
        borderRadius="2xl"
      ></Image>
      <Text fontSize={{ base: "15px", lg: "20px" }} color="#F56E0F">
        {props.heading}
      </Text>
      <Text px={2} fontSize={{ base: "12px", lg: "15px" }}>
        {props.description}
      </Text>
    </VStack>
  );
};

HireMeCard.propTypes = {
  src: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HireMeCard;
