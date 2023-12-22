import { Wrap, Heading, VStack, Link } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import { LeetCodeIcon, GFGIcon, CodechefIcon, CodeforcesIcon } from "./Icons";

const ProblemSolving = () => {
  return (
    <VStack height="300px" width="400px" backgroundColor="blue.400">
      <Heading>Problem Solving</Heading>
      <Wrap justify="center">
        <Link href="">
          <SkillBlock icon={LeetCodeIcon} name="LeetCode" />
        </Link>
        <Link href="">
          <SkillBlock icon={GFGIcon} name="GeeksForGeeks" />
        </Link>
        <Link href="">
          <SkillBlock icon={CodeforcesIcon} name="Codeforces" />
        </Link>
        <Link href="">
          <SkillBlock icon={CodechefIcon} name="Codechef" />
        </Link>
      </Wrap>
    </VStack>
  );
};

export default ProblemSolving;
