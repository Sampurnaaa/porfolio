import { motion } from "framer-motion"
import { profile } from "../data/content"
import { NeuralField } from "./NeuralField"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="hero" id="top">
      <NeuralField />

      <div className="hero-content">
        <motion.div
          className="hero-highlights"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease }}
        >
          <a className="hero-highlight college" href="#more">
            <span className="highlight-label">College</span>
            <span className="highlight-value">{profile.college}</span>
          </a>
          <a className="hero-highlight company" href="#experience">
            <span className="highlight-label">Now</span>
            <span className="highlight-value">
              {profile.companyRole} · {profile.company}
            </span>
          </a>
        </motion.div>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
        >
          {profile.role}
        </motion.p>

        <h1 className="hero-brand" aria-label={profile.name}>
          <span className="line">
            <motion.span
              className="word"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease }}
            >
              Sampurna
            </motion.span>
          </span>
          <span className="line">
            <motion.span
              className="word"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.37, ease }}
            >
              Mandal
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero-headline"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
        >
          {profile.headline}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
        >
          <a className="btn-primary" href="#contact">
            Get in touch
          </a>
          <a className="btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}
