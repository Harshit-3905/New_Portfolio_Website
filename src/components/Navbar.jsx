import { HStack, Text, Button, Link, Image } from "@chakra-ui/react";
import Logo from "../assets/favicon.png";

const Navbar = () => {
  const hover = () => {
    return { color: "#F56E0F" };
  };
  return (
    <HStack
      height="10%"
      width={{ base: "100%", md: "100%", lg: "80%" }}
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
        <Link href="#home" _hover={hover}>
          <Text fontSize="20px" fontWeight="500">
            Home
          </Text>
        </Link>
        <Link href="#about" _hover={hover}>
          <Text fontSize="20px" fontWeight="500">
            About
          </Text>
        </Link>
        <Link href="#skills" _hover={hover}>
          <Text fontSize="20px" fontWeight="500">
            Skills
          </Text>
        </Link>
        <Link href="#projects" _hover={hover}>
          <Text fontSize="20px" fontWeight="500">
            Projects
          </Text>
        </Link>
        <Link href="#contact" _hover={hover}>
          <Text fontSize="20px" fontWeight="500">
            Contact
          </Text>
        </Link>
      </HStack>
      <Link href="https://github.com/Harshit-3905" isExternal>
        <Button borderRadius="3xl">Github Profile</Button>
      </Link>
    </HStack>
  );
};

export default Navbar;
