import Card from "./Card"
import Tag from "./Tag"
import type { ProjectItem } from "../content/content"

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        <div>
          <h3 style={{ fontSize: 18, marginBottom: 6 }}>{project.name}</h3>
          <p>{project.description}</p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.tech.map((t) => (
            <Tag key={t} text={t} />
          ))}
        </div>

        {project.links?.length ? (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {project.links.map((l) => (
              <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  )
}
