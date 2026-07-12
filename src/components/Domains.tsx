import { motion, useInView } from "framer-motion"
import { useRef, type CSSProperties } from "react"
import { domains } from "../data/content"
import { Reveal } from "./Reveal"

const ease = [0.22, 1, 0.36, 1] as const

export function Domains() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="section domains-section" id="domains">
      <div className="container">
        <Reveal>
          <p className="section-label">Domains</p>
          <h2 className="section-title">At the intersection of industries.</h2>
          <p className="section-lead">
            Not a single lane — work that sits where finance, healthcare, electronics, and AI/ML
            meet. Same rigor across very different business contexts.
          </p>
        </Reveal>

        <div className="domains-layout" ref={ref}>
          <motion.div
            className="domains-orbit"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.9, ease }}
          >
            <div className="orbit-ring orbit-ring-a" />
            <div className="orbit-ring orbit-ring-b" />
            <div className="orbit-core">
              <span className="orbit-core-label">Intersection</span>
              <span className="orbit-core-title">Business × AI</span>
            </div>
            {domains.map((d, i) => {
              const angle = (i / domains.length) * 360 - 90
              return (
                <motion.span
                  key={d.name}
                  className={`orbit-node accent-${d.accent}`}
                  style={{ "--angle": `${angle}deg` } as CSSProperties}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={inView ? { opacity: 1, scale: 1 } : undefined}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease }}
                >
                  {d.name}
                </motion.span>
              )
            })}
          </motion.div>

          <ul className="domains-list">
            {domains.map((d, i) => (
              <motion.li
                key={d.name}
                className={`domain-item accent-${d.accent}`}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease }}
              >
                <span className="domain-name">{d.name}</span>
                <span className="domain-detail">{d.detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
