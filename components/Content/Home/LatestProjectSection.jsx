import SectionTitle from "../../Atoms/SectionTitle";
import ProjectCard from "../../Atoms/ProjectCard";
import PortfolioImage from "../../../assets/portfolio/jtl-compro.png";

export default function LatestProject(props) {
  const current_project = props.projects.slice(0, 3);
  return (
    <div className="container">
      <SectionTitle
        titleHint="See Our Work"
        titleMain="Our Recent Projects"
        titleDescription="We work along with clients to create digital business needs"
      />
      <div className="-mx-4 flex flex-wrap">
        {current_project.map((item) => (
          <ProjectCard
            image={PortfolioImage}
            category={item.category}
            name={item.name}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
