import {
  Flex,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        width="80%"
        justifyContent="center"
        backgroundColor="black"
        color="white"
        padding="4"
      >
        <Box width={{ base: "100%", md: "30%" }} textAlign="center">
          <Heading fontSize="lg">Harshit&apos;s Portfolio</Heading>
          <Text>Thank you for visiting my personal portfolio website</Text>
          <Text>Connect with me over socials.</Text>
          <Text>
            Please wait for a while; all projects will be listed soon.
          </Text>
        </Box>
        <Box width={{ base: "100%", md: "30%" }} textAlign="center">
          <Heading fontSize="lg">Quick Links</Heading>
          <List styleType="none" id="links">
            <ListItem>
              <Link href="#home">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="#about">About</Link>
            </ListItem>
            <ListItem>
              <Link href="#skills">Skills</Link>
            </ListItem>
            <ListItem>
              <Link href="#project">Projects</Link>
            </ListItem>
            <ListItem>
              <Link href="#contact">Contact</Link>
            </ListItem>
          </List>
        </Box>
        <Box width={{ base: "100%", md: "30%" }} textAlign="center">
          <Heading fontSize="lg">Contact Info</Heading>
          <Text>harshitjoshidev@gmail.com</Text>
          <Text>Kolkata, West Bengal</Text>
        </Box>
      </Flex>
      <Box textAlign="center" color="white" padding="4">
        Made by &nbsp;
        <Link href="https://www.linkedin.com/in/harshit-joshi-40953321b/">
          Harshit Joshi
        </Link>
      </Box>
    </>
  );
};

export default Footer;
