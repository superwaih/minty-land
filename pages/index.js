import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Hero from "@/components/LandingPageComponents/Hero";
import DiscoverSection from "@/components/LandingPageComponents/DiscoverSection";
import TradeSection from "@/components/LandingPageComponents/TradeSection";
import About from "@/components/LandingPageComponents/About";
import Footer from "@/components/LandingPageComponents/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MintyLand Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
        <DiscoverSection />
        <TradeSection />
        {/* <About /> */}
        <Footer />
      </main>
    </>
  );
}
