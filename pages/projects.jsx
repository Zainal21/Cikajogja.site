import SectionTitle from "../components/Atoms/SectionTitle";
import ProjectCard from "../components/Atoms/ProjectCard";
import PortfolioImage from "../assets/portfolio/jtl-compro.png";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container">
        <SectionTitle
          titleMain="Our Recent Projects"
          titleDescription="We work along with clients to create digital business needs"
        />
        <div class="mx-4 flex flex-wrap">
          {projects.map((item) => (
            <ProjectCard
              image={PortfolioImage}
              category={item.category}
              name={item.name}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
