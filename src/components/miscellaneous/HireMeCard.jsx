import { VStack, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

const HireMeCard = (props) => {
  return (
    <VStack
      width={{ base: "250px", md: "300px", lg: "350px" }}
      height={{ base: "320px", md: "350px", lg: "380px" }}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      backgroundColor="#262626"
      borderRadius="2xl"
      border="1px solid #FBFBFB"
    >
      <Fade>
        <Image
          src={props.src}
          width={{ base: "200px", md: "200px", lg: "220px" }}
          backgroundColor="white"
          borderRadius="2xl"
        />
        <Text fontSize={{ base: "18px", lg: "20px" }} color="#F56E0F">
          {props.heading}
        </Text>
        <Text px={2} fontSize={{ base: "14px", lg: "15px" }}>
          {props.description}
        </Text>
      </Fade>
    </VStack>
  );
};

HireMeCard.propTypes = {
  src: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HireMeCard;
