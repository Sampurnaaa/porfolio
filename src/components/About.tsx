import { profile } from "../data/content"
import { Reveal, Stagger } from "./Reveal"

const stats = [
  { value: "91%", label: "Workflow automation at BlackRock" },
  { value: "200+", label: "Enterprise clients on K8s platforms" },
  { value: "Top 0.2%", label: "Kharagpur DS Hackathon ranking" },
]

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">Applied AI meets enterprise data platforms.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.08}>
            <div className="about-text">
              <p>{profile.summary}</p>
              <p>
                Interested in roles spanning Data Scientist, ML Engineer, AI Engineer, GenAI
                Engineer, and Forward Deployed Engineer — where model quality, retrieval systems,
                and production infrastructure meet.
              </p>
              <div className="interest-row">
                {profile.interests.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Stagger className="stat-stack" stagger={0.12}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
