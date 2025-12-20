import Container from "../components/Container"
import Section from "../components/Section"
import Card from "../components/Card"
import Tag from "../components/Tag"
import { experience } from "../content/content"

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Container>
        <div className="grid">
          {experience.map((item) => (
            <Card key={`${item.role}-${item.org}`}>
              <div style={{ display: "grid", gap: 12 }}>
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    flexWrap: "wrap"
                  }}
                >
                  {/* Left: role + org */}
                  <div>
                    <h3 style={{ fontSize: 18 }}>{item.role}</h3>
                    <p className="muted">{item.org}</p>
                  </div>

                  {/* Right: dates + tech tags */}
                  <div style={{ textAlign: "right" }}>
                    <p className="muted">{item.dates}</p>

                    {item.tech && item.tech.length > 0 && (
                      <div
                        style={{
                          marginTop: 8,
                          display: "flex",
                          gap: 8,
                          justifyContent: "flex-end",
                          flexWrap: "wrap"
                        }}
                      >
                        {item.tech.map((t) => (
                          <Tag key={t} text={t} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bullet points */}
                <ul style={{ paddingLeft: 18, color: "var(--muted)" }}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} style={{ marginBottom: 6 }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
