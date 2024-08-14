// import Image from "next/image";
import "@radix-ui/themes/styles.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import { Footer } from "./components/footer";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <Theme>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </Theme>
  );
}
