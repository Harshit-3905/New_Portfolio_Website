import { VStack, HStack, Text, Button, Image, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <HStack id="home" width="80%" height="80vh">
      <VStack width="50%" justifyContent="center" alignItems="center">
        <VStack alignItems="flex-start">
          <Text fontSize="20px">Hey!</Text>
          <Text fontSize="30px">I Am Harshit Joshi</Text>
          <Text fontSize="25px"></Text>
          <Button>View All Links</Button>
        </VStack>
      </VStack>
      <Box width="50%" alignItems="center" justifyContent="center">
        <Image alt="Photo"></Image>
      </Box>
    </HStack>
  );
};

export default Home;
