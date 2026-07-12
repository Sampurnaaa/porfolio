import { experience } from "../data/content"
import { Reveal, Stagger } from "./Reveal"

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where systems ship at scale.</h2>
          <p className="section-lead">
            From BlackRock’s multi-tenant data platforms to multi-agent GenAI at Dr. Reddy’s —
            production impact across infrastructure and applied ML.
          </p>
        </Reveal>

        <Stagger className="timeline" stagger={0.14} selector=":scope > article">
          {experience.map((job) => (
            <article className="exp-item" key={`${job.company}-${job.role}`}>
              <div className="exp-dot" aria-hidden="true" />
              <div className="exp-meta">
                <h3 className="exp-role">{job.role}</h3>
                <span className="exp-company">{job.company}</span>
                <span className="exp-period">
                  {job.location} · {job.period}
                </span>
              </div>
              <ul className="exp-list">
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 48)}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
