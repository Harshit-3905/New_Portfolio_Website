import { Heading, VStack, Wrap } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import { ExpressIcon, NodeIcon, MongoIcon } from "../miscellaneous/Icons";

const Backend = () => {
  return (
    <VStack
      minHeight="300px"
      width={{ base: "100%", md: "400px" }}
      backgroundColor="#262626"
      borderRadius="2xl"
      p={3}
      border="1px solid #FBFBFB"
    >
      <Heading
        fontSize="30px"
        color="#F56E0F"
        textDecoration="underline"
        textUnderlineOffset={5}
      >
        Backend
      </Heading>
      <Wrap justify="center" pt={4}>
        <SkillBlock icon={NodeIcon} name="Node JS" />
        <SkillBlock icon={ExpressIcon} name="Express JS" />
        <SkillBlock icon={MongoIcon} name="MongoDB" />
      </Wrap>
    </VStack>
  );
};

export default Backend;
