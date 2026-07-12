import type { CSSProperties } from "react"
import { domains } from "../data/content"
import { Reveal, Stagger } from "./Reveal"

export function Domains() {
  return (
    <section className="section domains-section" id="domains">
      <div className="container">
        <Reveal>
          <p className="section-label">Domains</p>
          <h2 className="section-title">At the intersection of Business, Tech & AI.</h2>
          <p className="section-lead">
            Built for Forward Deployed Engineer work — sitting where business problems, production
            tech, and applied AI meet across finance, healthcare, and engineering.
          </p>
        </Reveal>

        <div className="domains-layout">
          <Reveal y={40}>
            <div className="domains-orbit" aria-hidden="true">
              <div className="orbit-ring orbit-ring-a" />
              <div className="orbit-ring orbit-ring-b" />
              <div className="orbit-core pulse-glow">
                <span className="orbit-core-label">Forward Deployed</span>
                <span className="orbit-core-title">Business × Tech × AI</span>
              </div>
              <div className="orbit-spinner">
                {domains.map((d, i) => {
                  const angle = (i / domains.length) * 360 - 90
                  return (
                    <span
                      key={d.name}
                      className={`orbit-node accent-${d.accent}`}
                      style={{ "--angle": `${angle}deg` } as CSSProperties}
                    >
                      <span className="orbit-node-label">{d.name}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          </Reveal>

          <Stagger className="domains-list" stagger={0.08} selector=":scope > li" as="ul">
            {domains.map((d, i) => (
              <li
                key={d.name}
                className={`domain-item accent-${d.accent} float-soft`}
                style={{ animationDelay: `${i * 0.35}s` } as CSSProperties}
              >
                <span className="domain-name">{d.name}</span>
                <span className="domain-detail">{d.detail}</span>
              </li>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
