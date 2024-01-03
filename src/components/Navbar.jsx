import { HStack, Text, Button, Link, Image } from "@chakra-ui/react";
import Logo from "../assets/favicon.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <HStack
      height="10%"
      width={{ base: "100%", md: "100%", lg: "85%" }}
      justifyContent="space-between"
      padding={5}
      position="fixed"
      zIndex={2}
      backgroundColor="#262626"
    >
      <Image src={Logo} alt="Logo" height="40px" width="40px"></Image>
      <HStack
        width="40%"
        justifyContent="space-between"
        display={{ base: "none", md: "flex", lg: "flex" }}
        gap={5}
      >
        <Link href="#home" _hover={{ color: "#F56E0F" }}>
          <Text fontSize="20px" fontWeight="500">
            Home
          </Text>
        </Link>
        <Link href="#about" _hover={{ color: "#F56E0F" }}>
          <Text fontSize="20px" fontWeight="500">
            About
          </Text>
        </Link>
        <Link href="#skills" _hover={{ color: "#F56E0F" }}>
          <Text fontSize="20px" fontWeight="500">
            Skills
          </Text>
        </Link>
        <Link href="#projects" _hover={{ color: "#F56E0F" }}>
          <Text fontSize="20px" fontWeight="500">
            Projects
          </Text>
        </Link>
        <Link href="#contact" _hover={{ color: "#F56E0F" }}>
          <Text fontSize="20px" fontWeight="500">
            Contact
          </Text>
        </Link>
      </HStack>
      <Link
        href="https://drive.google.com/file/d/1k3ept5svEKYSsri7GLkIaHmsWGHyNNyl/view?usp=sharing"
        isExternal
      >
        <Button
          rightIcon={<ArrowForwardIcon />}
          backgroundColor="#F56E0F"
          borderRadius="xl"
          border="1px solid #F56E0F"
          _hover={{ color: "#F56E0F", backgroundColor: "#262626" }}
          height="38px"
          fontSize={{ base: "12px", md: "16px" }}
        >
          Resume
        </Button>
      </Link>
    </HStack>
  );
};

export default Navbar;
