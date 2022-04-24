import SectionTitle from "../../Atoms/SectionTitle";
import ProjectCard from "../../Atoms/ProjectCard";
import PortfolioImage from "../../../assets/portfolio/jtl-compro.png";
export default function LatestProject({ children }) {
  const Portfolios = [
    {
      id: 1,
      category: "Web Development",
      name: "Company Profile",
    },
    {
      id: 2,
      category: "Web Development",
      name: "Company Profile",
    },
    {
      id: 3,
      category: "Web Development",
      name: "Company Profile",
    },
    {
      id: 4,
      category: "Web Development",
      name: "Company Profile",
    },
    {
      id: 5,
      category: "Web Development",
      name: "Company Profile",
    },
    {
      id: 6,
      category: "Web Development",
      name: "Company Profile",
    },
  ];
  return (
    <div className="container">
      <SectionTitle
        titleHint="See Our Work"
        titleMain="Our Recent Projects"
        titleDescription="We work along with clients to create digital business needs"
      />
      <div className="-mx-4 flex flex-wrap">
        {Portfolios.map((item) => (
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
