import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { profile } from "../data/content"
import { NeuralField } from "./NeuralField"
import { Magnetic } from "./Magnetic"

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      gsap.set(root.querySelectorAll(".hero-anim"), { clearProps: "all", autoAlpha: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      const highlights = root.querySelectorAll(".hero-highlight")
      const role = root.querySelector(".hero-role")
      const words = root.querySelectorAll(".hero-brand .word")
      const headline = root.querySelector(".hero-headline")
      const actions = root.querySelectorAll(".hero-actions a")
      const scroll = root.querySelector(".hero-scroll")

      gsap.set([highlights, role, headline, actions, scroll], { autoAlpha: 0, y: 28 })
      gsap.set(words, { yPercent: 115, rotate: 2 })

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.to(highlights, {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.85,
      })
        .to(
          role,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
          },
          "-=0.45",
        )
        .to(
          words,
          {
            yPercent: 0,
            rotate: 0,
            stagger: 0.12,
            duration: 1.15,
          },
          "-=0.35",
        )
        .to(
          headline,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
          },
          "-=0.55",
        )
        .to(
          actions,
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            duration: 0.7,
          },
          "-=0.45",
        )
        .to(
          scroll,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.3",
        )

      gsap.to(words, {
        backgroundPosition: "200% 50%",
        duration: 5,
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={rootRef}>
      <NeuralField />

      <div className="hero-content">
        <div className="hero-highlights">
          <a className="hero-highlight college hero-anim" href="#more">
            <span className="highlight-label">College</span>
            <span className="highlight-value">{profile.college}</span>
          </a>
          <a className="hero-highlight company hero-anim" href="#experience">
            <span className="highlight-label">Now</span>
            <span className="highlight-value">
              {profile.companyRole} · {profile.company}
            </span>
          </a>
        </div>

        <p className="hero-role hero-anim">{profile.role}</p>

        <h1 className="hero-brand" aria-label={profile.name}>
          <span className="line">
            <span className="word">Sampurna</span>
          </span>
          <span className="line">
            <span className="word">Mandal</span>
          </span>
        </h1>

        <p className="hero-headline hero-anim">{profile.headline}</p>

        <div className="hero-actions">
          <Magnetic strength={0.4}>
            <a className="btn-primary hero-anim" href="#contact">
              Get in touch
            </a>
          </Magnetic>
          <Magnetic strength={0.35}>
            <a className="btn-ghost hero-anim" href={profile.linkedin} target="_blank" rel="noreferrer">
              View LinkedIn
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="hero-scroll hero-anim">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
