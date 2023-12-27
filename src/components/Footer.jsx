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
        justifyContent="center"
        backgroundColor="black"
        color="white"
        padding="4"
      >
        <Box width={{ base: "100%", md: "30%" }} textAlign="center">
          <Heading fontSize="lg" color="DarkGreen">
            Harshit&apos;s Portfolio
          </Heading>
          <Text>Thank you for visiting my personal portfolio website</Text>
          <Text>Connect with me over socials.</Text>
          <Text>
            Please wait for a while; all projects will be listed soon.
          </Text>
        </Box>
        <Box width={{ base: "100%", md: "30%" }} textAlign="center">
          <Heading fontSize="lg" color="DarkGreen">
            Quick Links
          </Heading>
          <List styleType="none" id="links">
            <ListItem>
              <Link href="#home">
                <i className="fa-solid fa-circle-arrow-right"></i> Home
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#about">
                <i className="fa-solid fa-circle-arrow-right"></i> About
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#skills">
                <i className="fa-solid fa-circle-arrow-right"></i> Skills
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#project">
                <i className="fa-solid fa-circle-arrow-right"></i> Projects
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#touch">
                <i className="fa-solid fa-circle-arrow-right"></i> Contact
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box width={{ base: "100%", md: "30%" }} textAlign="center">
          <Heading fontSize="lg" color="DarkGreen">
            Contact Info
          </Heading>
          <Text>
            <i className="fa-solid fa-envelope"></i>&nbsp;
            its.harshit.joshi.official@gmail.com
          </Text>
          <Text>
            <i className="fa-solid fa-location-dot"></i> Kolkata, West Bengal
          </Text>
        </Box>
      </Flex>
      <Box textAlign="center" color="white" padding="4">
        Made with <i className="fa fa-heart pulse"></i> by{" "}
        <Link
          href="https://www.linkedin.com/in/harshit-joshi-40953321b/"
          color="LightGreen"
        >
          Harshit Joshi
        </Link>
      </Box>
    </>
  );
};

export default Footer;
