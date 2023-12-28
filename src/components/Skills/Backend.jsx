import { Heading, VStack, Wrap } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import { ExpressIcon, NodeIcon, MongoIcon } from "../miscellaneous/Icons";

const Backend = () => {
  return (
    <VStack
      minheight="350px"
      width="400px"
      backgroundColor="#262626"
      borderRadius="2xl"
      p={3}
      border="1px solid #FBFBFB"
    >
      <Heading>Backend</Heading>
      <Wrap justify="center" pt={4}>
        <SkillBlock icon={NodeIcon} name="Node JS" />
        <SkillBlock icon={ExpressIcon} name="Express JS" />
        <SkillBlock icon={MongoIcon} name="MongoDB" />
      </Wrap>
    </VStack>
  );
};

export default Backend;
