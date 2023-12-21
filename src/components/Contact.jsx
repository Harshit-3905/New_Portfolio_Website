import {
  VStack,
  HStack,
  Heading,
  Image,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <VStack id="contact" width="80%" height="90vh">
      <Heading>Get in Contact</Heading>
      <HStack>
        <Image alt="pic"></Image>
        <VStack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormLabel>Phone</FormLabel>
            <Input type="number" />
            <FormLabel>Message</FormLabel>
            <Input type="textarea" />
          </FormControl>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Contact;
