import Section from "../components/Section"
import TypewriterName from "../components/TypewriterName"
import { profile } from "../content/content"

export default function Hero() {
  return (
    <Section id="home">
      <div className="hero-layout">
        <div className="hero-text">
          <div className="hero-main">
            <div className="hero-lead">
              <TypewriterName text={profile.name} />
              <p style={{ marginTop: 10 }}>{profile.tagline}</p>
            </div>
            <div className="hero-photo">
              <img
                src="/marry_headshot.jpg"
                alt={`${profile.name} — headshot`}
                decoding="async"
              />
            </div>
            <p className="hero-bio">{profile.bio}</p>
          </div>

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
