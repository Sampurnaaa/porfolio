import { projects } from "../data/content"
import { Reveal, Stagger } from "./Reveal"

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Projects & Research</p>
          <h2 className="section-title">Research that measures up.</h2>
          <p className="section-lead">
            Thesis-level computer vision and clinical ML — rigorous evaluation, clear metrics,
            production-minded design.
          </p>
        </Reveal>

        <Stagger className="project-list" stagger={0.14} selector=":scope > article">
          {projects.map((p) => (
            <article className="project" key={p.title}>
              <div>
                <div className="project-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <div className="project-org">{p.org}</div>
                <p>{p.description}</p>
              </div>
              <div className="project-metric">{p.metric}</div>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
