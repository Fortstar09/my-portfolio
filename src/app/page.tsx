// import Image from "next/image";
import "@radix-ui/themes/styles.css";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
import { Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <Theme>
      <Navbar />
      <Footer />
    </Theme>
  );
}
