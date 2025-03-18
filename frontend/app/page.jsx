import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSec from "./components/Hero-section/HeroSec";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSec />
    </>
  );
}
