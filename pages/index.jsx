import Head from "next/head";
import Section from "../components/Atoms/Section";
import HeroSection from "../components/Content/Home/HeroSection";
import ServiceSection from "../components/Content/Home/ServiceSection";
import LatestProjectSection from "../components/Content/Home/LatestProjectSection";
import CallToActionSection from "../components/Content/Home/CallToActionSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Cikajogja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section id="hero-section" className="container mx-auto">
        <HeroSection />
      </Section>
      <Section
        id="service-section"
        className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
      >
        <ServiceSection />
      </Section>
      <Section
        id="latest-projects-section"
        className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
      >
        <LatestProjectSection />
      </Section>
      <Section id="cta-section" className="py-20 lg:py-[120px]">
        <CallToActionSection />
      </Section>
    </>
  );
}
