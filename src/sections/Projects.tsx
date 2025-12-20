import Section from "../components/Section"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../content/content"

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      
        <div className="grid grid-2">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      
    </Section>
  )
}
