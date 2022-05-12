import Head from "next/head";
import SectionTitle from "../components/Atoms/SectionTitle";
import ProjectCard from "../components/Atoms/ProjectCard";
import PortfolioImage from "../assets/portfolio/jtl-compro.png";
import projects from "../data/projects.json";

export default function Projects() {
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
          Our Projects Cikajogja.com!
        </a>
      </h1>
    </main>
  </div>
  );
}
