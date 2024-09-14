import Image from "next/image";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutSection from "./components/AboutSection.jsx";
import EmailSection from "./components/EmailSection.jsx";


export default function Home() {
  return (
    <body>
      <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <EmailSection/>
    </body>
  );
}
