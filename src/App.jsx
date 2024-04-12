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
import Github from "./components/Github";
import PreLoader from "./components/PreLoader";
import Starfield from "react-starfield";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) return <PreLoader />;
  return (
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
  );
}

export default App;
