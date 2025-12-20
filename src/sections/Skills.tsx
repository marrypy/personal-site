import Container from "../components/Container"
import Section from "../components/Section"
import Card from "../components/Card"
import Tag from "../components/Tag"
import { skills } from "../content/content"

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <Container>
        <div className="grid grid-3">
          {skills.categories.map((cat) => (
            <Card key={cat.label}>
              <h3 style={{ fontSize: 16, marginBottom: 10 }}>{cat.label}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.items.map((it) => (
                  <Tag key={it} text={it} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

