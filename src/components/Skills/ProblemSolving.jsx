import { Wrap, Heading, VStack, Link } from "@chakra-ui/react";
import SkillBlock from "./SkillBlock";
import {
  LeetCodeIcon,
  GFGIcon,
  CodechefIcon,
  CodeforcesIcon,
} from "../miscellaneous/Icons";

const ProblemSolving = () => {
  return (
    <VStack
      height="350px"
      width="400px"
      backgroundColor="blue.400"
      borderRadius="2xl"
      p={3}
    >
      <Heading>Problem Solving</Heading>
      <Wrap justify="center" pt={4}>
        <Link href="https://leetcode.com/Harshit_3905/" isExternal>
          <SkillBlock icon={LeetCodeIcon} name="LeetCode" />
        </Link>
        <Link
          href="https://auth.geeksforgeeks.org/user/harshitjoshileet"
          isExternal
        >
          <SkillBlock icon={GFGIcon} name="GeeksForGeeks" />
        </Link>
        <Link href="https://codeforces.com/profile/Harshit_3905" isExternal>
          <SkillBlock icon={CodeforcesIcon} name="Codeforces" />
        </Link>
        <Link href="https://www.codechef.com/users/harshitjoshi02" isExternal>
          <SkillBlock icon={CodechefIcon} name="Codechef" />
        </Link>
      </Wrap>
    </VStack>
  );
};

export default ProblemSolving;
