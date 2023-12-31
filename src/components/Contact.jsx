import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import ContactImage from "../assets/ContactImage.png";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(" ");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const Submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await emailjs.send(
      "service_tof52bh",
      "template_bpe2k9o",
      { name, email, subject, message },
      "aRd8Bo25JM1hECd9W"
    );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    toast({
      title: "Message Sent Successfully",
      description: "I will get back to you as soon as possible",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setLoading(false);
  };
  return (
    <VStack
      id="contact"
      width={{ base: "95%", lg: "80%" }}
      minHeight="90vh"
      pt={10}
    >
      <Heading pt={10}>Get in Contact</Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        width="100%"
        minHeight="500px"
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
          <Image
            src={ContactImage}
            width={{ base: "300px", md: "350px" }}
          ></Image>
        </Flex>
        <VStack
          width={{ base: "100%", md: "50%", lg: "50%" }}
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width={{ base: "80%", md: "70%" }}
            pt={{ base: "40px", md: "0" }}
          >
            <form>
              <FormControl marginBottom="4">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl marginBottom="4">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl marginBottom="4">
                <FormLabel>Subject</FormLabel>
                <Input
                  type="text"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </FormControl>

              <FormControl marginBottom="4">
                <FormLabel>Message</FormLabel>
                <Input
                  type="textarea"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>

              <Button
                fontSize={{ base: "15px", md: "18px" }}
                type="submit"
                rightIcon={<IoIosSend />}
                backgroundColor="#F56E0F"
                borderRadius="xl"
                border="1px solid #F56E0F"
                _hover={{ color: "#F56E0F", backgroundColor: "#262626" }}
                height="45px"
                onClick={Submit}
                isLoading={loading}
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
