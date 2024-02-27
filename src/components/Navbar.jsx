import { HStack, Text, Link, Image } from "@chakra-ui/react";
import Logo from "../assets/favicon.webp";
import { Fade } from "react-awesome-reveal";
import { FaHome, FaUser, FaCode } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

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
      <Fade direction="down" triggerOnce>
        <Image src={Logo} alt="Logo" height="40px" width="40px" />
        <HStack
          width="40%"
          justifyContent="space-between"
          display={{ base: "none", md: "flex", lg: "flex" }}
          gap={10}
        >
          <Link href="#home" _hover={{ color: "#F56E0F" }}>
            <HStack>
              <FaHome size="25px" />
              <Text fontSize="22px" fontWeight="500">
                Home
              </Text>
            </HStack>
          </Link>
          <Link href="#about" _hover={{ color: "#F56E0F" }}>
            <HStack>
              <FaUser size="20px" />
              <Text fontSize="22px" fontWeight="500">
                About
              </Text>
            </HStack>
          </Link>
          <Link href="#skills" _hover={{ color: "#F56E0F" }}>
            <HStack>
              <FaCode size="25px" />
              <Text fontSize="22px" fontWeight="500">
                Skills
              </Text>
            </HStack>
          </Link>
          <Link href="#projects" _hover={{ color: "#F56E0F" }}>
            <HStack>
              <AiOutlineFundProjectionScreen size="25px" />
              <Text fontSize="22px" fontWeight="500">
                Projects
              </Text>
            </HStack>
          </Link>
          <Link href="#contact" _hover={{ color: "#F56E0F" }}>
            <HStack gap={1}>
              <IoCall size="25px" />
              <Text fontSize="22px" fontWeight="500">
                Contact
              </Text>
            </HStack>
          </Link>
        </HStack>
      </Fade>
    </HStack>
  );
};

export default Navbar;
