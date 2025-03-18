import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSec from "./components/Hero-section/HeroSec";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSec />
      <Footer/>
    </>
  );
}
