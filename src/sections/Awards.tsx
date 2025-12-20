import Container from "../components/Container"
import Section from "../components/Section"
import Card from "../components/Card"
import { awards } from "../content/content"

export default function Awards() {
  return (
    <Section id="awards" title="Awards">
      <Container>
        <div className="grid grid-2">
          {awards.map((a) => (
            <Card key={`${a.title}-${a.year ?? ""}`}>
              <h3 style={{ fontSize: 18 }}>{a.title}</h3>
              <p className="muted">
                {a.org ? a.org : ""}{a.org && a.year ? " • " : ""}{a.year ? a.year : ""}
              </p>
              {a.details ? <p style={{ marginTop: 10 }}>{a.details}</p> : null}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
