import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Experience from "./components/UI/Experience";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import Profile from "./components/UI/Profile";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>
    <Header />
    {/* <main className="bg-[#f0edff]"> */}
    <main className="bg-gradient-to-r from-[#ebe7ff] to-[#ffeef7] via-[#e7f5ff]">
      <Hero />
      <Experience />
      <Profile />
      <Portfolio />
      <Contact />

    </main>
    <Footer />
  </>;
}

export default App;
