import ProjectCard from "./ProjectCard";
import Container from "../../Atoms/Container";
import Divider from "../../Atoms/Divider";

import DummyImage from "../../../assets/dummy_image.png";

export default function Projects() {
  return (
    <Container id="projects" className="pt-20 pb-12">
      <ProjectCard
        img={{
          src: DummyImage,
          alt: "image default",
        }}
        title="Lorem ipsum dolor"
        body={
          <>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Lorem ipsum dolor sit.
            </a>{" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            exercitationem deleniti iusto voluptas possimus adipisci, nulla
            animi fuga aliquid laudantium quas libero ab consectetur rem!
            Repellat, voluptatum magnam amet nobis, laborum, aperiam quae sed
            maxime porro dolorum officia nemo aliquid?
          </>
        }
        links={[
          {
            name: "GitHub",
            href: "https://github.com/redhat-developer/vscode-microprofile",
          },
          {
            name: "VSMarketplace",
            href: "https://marketplace.visualstudio.com/items?itemName=redhat.vscode-microprofile",
          },
        ]}
      />
      <Divider />
      <ProjectCard
        img={{
          src: DummyImage,
          alt: "image default",
        }}
        title="Lorem ipsum dolor"
        body={
          <>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Lorem ipsum dolor sit.
            </a>{" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            exercitationem deleniti iusto voluptas possimus adipisci, nulla
            animi fuga aliquid laudantium quas libero ab consectetur rem!
            Repellat, voluptatum magnam amet nobis, laborum, aperiam quae sed
            maxime porro dolorum officia nemo aliquid?
          </>
        }
        links={[
          {
            name: "View Projects",
            href: "https://github.com/redhat-developer/vscode-microprofile",
          },
        ]}
      />
      <Divider />

      <ProjectCard
        img={{
          src: DummyImage,
          alt: "image default",
        }}
        title="Lorem ipsum dolor"
        body={
          <>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Lorem ipsum dolor sit.
            </a>{" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            exercitationem deleniti iusto voluptas possimus adipisci, nulla
            animi fuga aliquid laudantium quas libero ab consectetur rem!
            Repellat, voluptatum magnam amet nobis, laborum, aperiam quae sed
            maxime porro dolorum officia nemo aliquid?
          </>
        }
        links={[
          {
            name: "View Projects",
            href: "https://github.com/redhat-developer/vscode-microprofile",
          },
        ]}
      />
      <Divider />
    </Container>
  );
}
