"use client";

import Image from "next/image";
import {
  FilterButton,
  ProjectCard,
  ProjectsContainer,
  ProjectsFilter,
  ProjectsGrid,
  ProjectsSubtitle,
  ProjectsTitle,
} from "./projects.styles";
import { useState } from "react";

const projects = [
  {
    category_name: "UI/UX",
    title: "My UI/UX Project 1",
    image_preview: "/project.svg",
  },
  {
    category_name: "UI/UX",
    title: "My UI/UX Project 2",
    image_preview: "/project.svg",
  },
  {
    category_name: "UI/UX",
    title: "My UI/UX Project 3",
    image_preview: "/project.svg",
  },
  {
    category_name: "Web Design",
    title: "My Web Design Project 1",
    image_preview: "/project.svg",
  },
  {
    category_name: "Web Design",
    title: "My Web Design Project 2",
    image_preview: "/project.svg",
  },
  {
    category_name: "App Design",
    title: "My App Design Project 1",
    image_preview: "/project.svg",
  },
  {
    category_name: "Graphic Design",
    title: "My Graphic Design Project 1",
    image_preview: "/project.svg",
  },
];

export function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category_name === filter
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsSubtitle>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </ProjectsSubtitle>

      <ProjectsFilter>
        <FilterButton
          selected={activeFilter === "All"}
          onClick={() => handleFilter("All")}
        >
          All
        </FilterButton>
        <FilterButton
          selected={activeFilter === "UI/UX"}
          onClick={() => handleFilter("UI/UX")}
        >
          UI/UX
        </FilterButton>
        <FilterButton
          selected={activeFilter === "Web Design"}
          onClick={() => handleFilter("Web Design")}
        >
          Web Design
        </FilterButton>
        <FilterButton
          selected={activeFilter === "App Design"}
          onClick={() => handleFilter("App Design")}
        >
          App Design
        </FilterButton>
        <FilterButton
          selected={activeFilter === "Graphic Design"}
          onClick={() => handleFilter("Graphic Design")}
        >
          Graphic Design
        </FilterButton>
      </ProjectsFilter>

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index}>
            <Image
              alt={project.title}
              src={project.image_preview}
              width={200}
              height={600}
            />
            <h3>{project.category_name}</h3>
            <h2>{project.title}</h2>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}
