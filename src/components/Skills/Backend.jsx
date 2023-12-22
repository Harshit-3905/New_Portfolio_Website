import { Heading, VStack, Wrap } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import { ExpressIcon, NodeIcon, MongoIcon } from "./Icons";

const Backend = () => {
  return (
    <VStack height="300px" width="400px" backgroundColor="blue.400">
      <Heading>Backend</Heading>
      <Wrap justify="center">
        <SkillBlock icon={NodeIcon} name="Node JS" />
        <SkillBlock icon={ExpressIcon} name="Express JS" />
        <SkillBlock icon={MongoIcon} name="MongoDB" />
        <SkillBlock icon={ExpressIcon} name="ExpressJS" />
      </Wrap>
    </VStack>
  );
};

export default Backend;
