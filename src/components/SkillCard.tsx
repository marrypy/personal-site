import Section from "./Section"

const skills = [
  "React",
  "TypeScript",
  "Python",
  "Machine Learning",
  "Computer Vision",
  "OpenCV",
  "TensorFlow"
]

export default function Skills() {
  return (
    <Section>
      <h2>Skills</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "1rem",
        marginTop: "2rem"
      }}>
        {skills.map(skill => (
          <div key={skill} style={{
            padding: "1rem",
            background: "var(--bg-alt)",
            borderRadius: "12px",
            textAlign: "center"
          }}>
            {skill}
          </div>
        ))}
      </div>
    </Section>
  )
}
