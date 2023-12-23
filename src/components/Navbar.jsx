import { HStack, Text, Button, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      height="10%"
      width="80%"
      justifyContent="space-between"
      paddingY={5}
      position="fixed"
      backgroundColor="black"
      zIndex={2}
    >
      <Text> Logo</Text>
      <HStack width="40%" justifyContent="space-between">
        <Link href="#home">
          <Text fontSize="20px" fontWeight="500">
            Home
          </Text>
        </Link>
        <Link href="#about">
          <Text fontSize="20px" fontWeight="500">
            About
          </Text>
        </Link>
        <Link href="#skills">
          <Text fontSize="20px" fontWeight="500">
            Skills
          </Text>
        </Link>
        <Link href="#projects">
          <Text fontSize="20px" fontWeight="500">
            Projects
          </Text>
        </Link>
        <Link href="#contact">
          <Text fontSize="20px" fontWeight="500">
            Contact
          </Text>
        </Link>
      </HStack>
      <Button borderRadius="3xl">Github Profile</Button>
    </HStack>
  );
};

export default Navbar;
