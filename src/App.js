import { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return <>
    <Header handleSwitch={handleSwitch} theme={theme}/>
    {/* <main className="bg-[#f0edff]"> */}
    <main className="bg-gradient-to-r from-[#ebe7ff] to-[#ffeef7] via-[#e7f5ff] dark:bg-gradient-to-r dark:from-[#0D1224] dark:to-[#42252F] dark:via-[#3D3141]">
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
