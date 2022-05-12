import Head from "next/head";
import Section from "../components/Atoms/Section";
import HeroSection from "../components/Content/Home/HeroSection";
import ServiceSection from "../components/Content/Home/ServiceSection";
import LatestProjectSection from "../components/Content/Home/LatestProjectSection";
import CallToActionSection from "../components/Content/Home/CallToActionSection";
import ContactSection from "../components/Content/Home/ContactSection";
// data
import projects from "../data/projects.json";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Home | Cikajogja</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-3xl font-bold">
        Cooming Soon{" "}
        <a className="text-red-600" href="https://nextjs.org">
          A New Cikajogja.com!
        </a>
      </h1>
    </main>
  </div>
  );
}
