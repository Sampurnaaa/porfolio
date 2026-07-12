import { motion } from "framer-motion"
import { projects } from "../data/content"
import { Reveal, Stagger, fadeUp } from "./Reveal"

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

        <Stagger className="project-list" stagger={0.12}>
          {projects.map((p) => (
            <motion.article
              className="project"
              key={p.title}
              variants={fadeUp}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <div>
                <div className="project-tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <div className="project-org">{p.org}</div>
                <p>{p.description}</p>
              </div>
              <div className="project-metric">{p.metric}</div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
