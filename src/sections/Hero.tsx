import Section from "../components/Section"
import { profile } from "../content/content"

export default function Hero() {
  return (
    <Section id="home">
      <div className="hero-layout">
        

        <div className="hero-text">
          <div>
            <h1>{profile.name}</h1>
            <p style={{ marginTop: 10 }}>{profile.tagline}</p>
          </div>

          <p style={{ maxWidth: 650 }}>{profile.bio}</p>

          <p className="muted">
            {profile.location} •{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>

          <div className="hero-links">
            {profile.links.map((l) => (
              <a
                key={l.href}
                className="btn"
                href={l.href}
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
