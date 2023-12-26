import {
  VStack,
  HStack,
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

const Contact = () => {
  return (
    <VStack id="contact" width="80%" height="90vh" pt={10}>
      <Heading>Get in Contact</Heading>
      <HStack
        width="100%"
        height="500px"
        mt={10}
        justifyContent="center"
        alignItems="center"
        borderRadius="2xl"
      >
        <Flex
          width="50%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={ContactImage}></Image>
        </Flex>
        <VStack
          width="50%"
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

              <Button type="submit">Submit</Button>
            </form>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Contact;
