import { useEffect, useState } from "react";
import Banner from "./Partials/Banner"
import NavBar from "./Partials/NavBar"
import Services from "./Screens/Services";
import Contact from "./Screens/Contact";
import Footer from "./Partials/Footer";
import About from "./Screens/About";

function App() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex-col flex">
        <NavBar scrollY={scrollY}/>
        <Banner scrollY={scrollY}/>
        <main>
          <Services />
          <About />
          <Contact />
        </main>
        <footer className="bg-[#222] py-10">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
