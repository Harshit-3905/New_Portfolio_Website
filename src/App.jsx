import "./App.css";
import { VStack } from "@chakra-ui/react";
import PreLoader from "./components/PreLoader";
import Starfield from "react-starfield";
import { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const Home = lazy(() => import("./components/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const HireMe = lazy(() => import("./components/HireMe"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Github = lazy(() => import("./components/Github"));

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
        <Github />
        <Projects />
        <HireMe />
        <Contact />
        <Footer />
      </VStack>
      <Analytics />
      <SpeedInsights />
    </Suspense>
  );
}

export default App;
