import {
  VStack,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";
import Frontend from "./Project/Frontend";
import Backend from "./Project/Backend";
import FullStack from "./Project/FullStack";

const Projects = () => {
  return (
    <VStack id="projects" width="80%" pt={20}>
      <Zoom triggerOnce>
        <Heading
          pt={5}
          color="#F56E0F"
          textDecoration="underline"
          textUnderlineOffset={5}
        >
          Projects
        </Heading>
      </Zoom>
      <Tabs variant="soft-rounded" align="center" pt={5} mt={5}>
        <Zoom triggerOnce>
          <TabList>
            <Tab
              _selected={{ color: "#F56E0F", bg: "#262626" }}
              textColor="white"
              fontSize={{ base: 15, md: 20 }}
            >
              Frontend
            </Tab>
            <Tab
              _selected={{ color: "#F56E0F", bg: "#262626" }}
              textColor="white"
              fontSize={{ base: 15, md: 20 }}
            >
              Backend
            </Tab>
            <Tab
              _selected={{ color: "#F56E0F", bg: "#262626" }}
              textColor="white"
              fontSize={{ base: 15, md: 20 }}
            >
              Full Stack
            </Tab>
          </TabList>
        </Zoom>
        <TabPanels>
          <TabPanel>
            <Frontend />
          </TabPanel>
          <TabPanel>
            <Backend />
          </TabPanel>
          <TabPanel>
            <FullStack />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Projects;
