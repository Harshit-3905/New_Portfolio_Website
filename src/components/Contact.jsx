import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Flex,
  Textarea,
  Box,
} from "@chakra-ui/react";
import ContactImage from "../assets/ContactImage.png";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <VStack id="contact" width="80%" minheight="90vh" pt={10}>
      <Heading pt={10}>Get in Contact</Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        width="100%"
        minheight="500px"
        mt={10}
        justifyContent="center"
        alignItems="center"
        borderRadius="2xl"
        border="1px solid #FBFBFB"
        py={10}
      >
        <Flex
          width={{ base: "100%", md: "50%", lg: "50%" }}
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={ContactImage}></Image>
        </Flex>
        <VStack
          width={{ base: "100%", md: "50%", lg: "50%" }}
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box width="70%">
            <form>
              <FormControl marginBottom="4">
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" required />
              </FormControl>

              <FormControl marginBottom="4">
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" required />
              </FormControl>

              <FormControl marginBottom="4">
                <FormLabel>Subject</FormLabel>
                <Input type="text" name="subject" required />
              </FormControl>

              <FormControl marginBottom="4">
                <FormLabel>Message</FormLabel>
                <Textarea type="textarea" name="message" rows={4} required />
              </FormControl>

              <Button
                type="submit"
                rightIcon={<IoIosSend />}
                backgroundColor="#F56E0F"
                borderRadius="xl"
                border="1px solid #F56E0F"
                _hover={{ color: "#F56E0F", backgroundColor: "#262626" }}
                height="35px"
              >
                Submit
              </Button>
            </form>
          </Box>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Contact;
