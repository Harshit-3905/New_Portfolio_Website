import "./App.css";
import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import HireMe from "./components/HireMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <VStack
      width="100%"
      alignItems="center"
      backgroundColor="black"
      color="white"
      overflowX="hidden"
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <HireMe />
      <Contact />
      <Footer />
    </VStack>
  );
}

export default App;
