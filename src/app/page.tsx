// import Image from "next/image";
import "@radix-ui/themes/styles.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { Footer } from "./components/footer";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <Theme>
      <Navbar />
      <Hero />
      <Footer />
    </Theme>
  );
}
