import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { projects } from "../data/content"
import { Reveal, Stagger } from "./Reveal"

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>(".project").forEach((card) => {
        const metric = card.querySelector(".project-metric")

        card.addEventListener("pointermove", (e) => {
          const rect = card.getBoundingClientRect()
          const px = (e.clientX - rect.left) / rect.width - 0.5
          const py = (e.clientY - rect.top) / rect.height - 0.5
          gsap.to(card, {
            rotateY: px * 10,
            rotateX: -py * 8,
            y: -6,
            transformPerspective: 900,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
          })
          if (metric) {
            gsap.to(metric, {
              x: px * 18,
              y: py * 12,
              scale: 1.12,
              duration: 0.45,
              ease: "power3.out",
              overwrite: "auto",
            })
          }
        })

        card.addEventListener("pointerleave", () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.55)",
            overwrite: "auto",
          })
          if (metric) {
            gsap.to(metric, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.55,
              ease: "power3.out",
              overwrite: "auto",
            })
          }
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="projects" ref={sectionRef}>
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
