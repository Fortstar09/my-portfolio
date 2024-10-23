import "@radix-ui/themes/styles.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import { IconCloudDemo } from "./components/tech";
import Project from "./components/project";
import Footer from "./components/footer";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <Theme>
      <Navbar />
      <Hero />
      <About />
      <IconCloudDemo />
      <Project />
      <Footer />
    </Theme>
  );
}
