import Section from "../components/Section"
import Tag from "../components/Tag"
import { experience } from "../content/content"

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="experience-timeline" role="list">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.org}`}
            className="experience-item"
            role="listitem"
          >
            <div className="experience-marker" aria-hidden />
            <div className="experience-body">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="muted experience-org">{item.org}</p>
                </div>
                <div className="experience-meta">
                  <p className="muted experience-dates">{item.dates}</p>
                  {item.tech && item.tech.length > 0 && (
                    <div className="experience-tags">
                      {item.tech.map((t) => (
                        <Tag key={t} text={t} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <ul className="experience-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
