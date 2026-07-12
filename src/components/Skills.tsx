import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { skills } from "../data/content"
import { Reveal, Stagger } from "./Reveal"
import { InfiniteMarquee } from "./InfiniteMarquee"

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>(".skill-block").forEach((block) => {
        const tags = block.querySelectorAll(".skill-tag")
        block.addEventListener("pointerenter", () => {
          gsap.to(tags, {
            y: -8,
            scale: 1.08,
            stagger: 0.03,
            duration: 0.35,
            ease: "back.out(2)",
            overwrite: "auto",
          })
        })
        block.addEventListener("pointerleave", () => {
          gsap.to(tags, {
            y: 0,
            scale: 1,
            stagger: 0.02,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          })
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <InfiniteMarquee />
      <div className="container">
        <Reveal>
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">Stack for models, agents, and platforms.</h2>
          <p className="section-lead">
            End-to-end ML development, NLP, deep learning, and large-scale data platform
            engineering — from notebooks to Kubernetes.
          </p>
        </Reveal>

        <Stagger className="skills-grid" stagger={0.08} selector=":scope > .skill-block">
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
