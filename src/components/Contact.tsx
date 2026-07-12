import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { profile } from "../data/content"

const ease = [0.22, 1, 0.36, 1] as const

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
          transition={{ duration: 0.85, ease }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let’s build the next system together.</h2>
          <p className="section-lead">
            Open to Data Scientist, ML Engineer, AI Engineer, and GenAI Engineer opportunities.
            Reach out for collaborations, roles, or a quick chat.
          </p>

          <div className="contact-links">
            <a className="primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {profile.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>
                {phone}
              </a>
            ))}
          </div>
        </motion.div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>ML / AI Engineer · Data Engineer · IIT Kharagpur</span>
        </footer>
      </div>
    </section>
  )
}
