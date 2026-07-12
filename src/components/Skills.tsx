import { skills } from "../data/content"
import { Reveal, Stagger } from "./Reveal"

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">Stack for models, agents, and platforms.</h2>
          <p className="section-lead">
            End-to-end ML development, NLP, deep learning, and large-scale data platform
            engineering — from notebooks to Kubernetes.
          </p>
        </Reveal>

        <Stagger className="skills-grid" stagger={0.1} selector=":scope > .skill-block">
          {skills.map((group) => (
            <div className="skill-block" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
