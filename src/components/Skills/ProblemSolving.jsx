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
      minHeight="300px"
      width={{ base: "450px", md: "390px" }}
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
        Problem Solving
      </Heading>
      <Wrap justify="center" pt={4}>
        <Link
          href="https://leetcode.com/Harshit_3905/"
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          <SkillBlock icon={LeetCodeIcon} name="LeetCode" />
        </Link>
        <Link
          href="https://www.codechef.com/users/harshitjoshi02"
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          <SkillBlock icon={CodechefIcon} name="Codechef" />
        </Link>
        <Link
          href="https://codeforces.com/profile/Harshit_3905"
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          <SkillBlock icon={CodeforcesIcon} name="Codeforces" />
        </Link>
        <Link
          href="https://auth.geeksforgeeks.org/user/harshitjoshileet"
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          <SkillBlock icon={GFGIcon} name="GeeksForGeeks" />
        </Link>
      </Wrap>
    </VStack>
  );
};

export default ProblemSolving;
