import "./App.css";
import { VStack } from "@chakra-ui/react";
import PreLoader from "./components/PreLoader";
import Starfield from "react-starfield";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const HireMe = lazy(() => import("./components/HireMe"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
      <VStack
        width="100%"
        alignItems="center"
        backgroundColor="black"
        color="white"
        overflowX="hidden"
      >
        <Starfield
          starCount={2000}
          starColor={[255, 255, 255]}
          speedFactor={0.07}
          backgroundColor="black"
        />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <HireMe />
        <Contact />
        <Footer />
      </VStack>
    </Suspense>
  );
}

export default App;
