import { VStack, HStack, Heading, Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <VStack id="about" width="80%" height="90vh">
      <Heading>About</Heading>
      <HStack width="100%">
        <Box width="50%"></Box>
        <VStack width="50%">
          <Text>I'm Harshit</Text>
          <Text>Passionate Developer</Text>
          <Text>
            Third-Year IT Undergraduate Student At Kalyani Government
            Engineering College. Desire To Make A Positive Impact On The People
            Around Me And Hope To Achieve This Through Personal Projects,
            Internships, Hackathons And Other Experiences
          </Text>
          <Text>
            I Am A Self-Taught Developer With A Passion For Web Development And
            Problem Solving. I Have A Strong Background In Software Development
            And Have Worked On A Wide Variety Of Projects
          </Text>
          <Text>Email : its.harshit.joshi.official@gmail.com</Text>
          <Text>College : Kalyani Government Engineering College </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default About;
