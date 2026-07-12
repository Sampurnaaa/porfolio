import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { profile } from "../data/content"
import { NeuralField } from "./NeuralField"
import { Magnetic } from "./Magnetic"

gsap.registerPlugin(ScrollTrigger)

function splitChars(text: string) {
  return text.split("").map((ch, i) => (
    <span className="char" key={`${ch}-${i}`}>
      <span className="char-inner">{ch === " " ? "\u00A0" : ch}</span>
    </span>
  ))
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const ctx = gsap.context(() => {
      const highlights = root.querySelectorAll(".hero-highlight")
      const role = root.querySelector(".hero-role")
      const chars = root.querySelectorAll(".char-inner")
      const headline = root.querySelector(".hero-headline")
      const actions = root.querySelectorAll(".hero-actions a")
      const scroll = root.querySelector(".hero-scroll")
      const flares = root.querySelectorAll(".hero-flare")
      const content = root.querySelector(".hero-content")

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.from(
        flares,
        {
          scale: 0.4,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 1.1,
          ease: "back.out(1.8)",
        },
        0,
      )
        .from(
          highlights,
          {
            y: 40,
            autoAlpha: 0,
            scale: 0.94,
            stagger: 0.12,
            duration: 0.9,
            ease: "back.out(1.6)",
          },
          0.2,
        )
        .from(
          role,
          {
            y: 36,
            autoAlpha: 0,
            scale: 0.96,
            duration: 0.75,
          },
          0.35,
        )
        .from(
          chars,
          {
            yPercent: 120,
            rotateX: -70,
            autoAlpha: 0,
            stagger: 0.028,
            duration: 0.95,
            ease: "back.out(1.7)",
          },
          0.45,
        )
        .from(
          headline,
          {
            y: 32,
            autoAlpha: 0,
            duration: 0.85,
          },
          0.7,
        )
        .from(
          actions,
          {
            y: 28,
            autoAlpha: 0,
            scale: 0.94,
            stagger: 0.12,
            duration: 0.8,
            ease: "back.out(1.8)",
          },
          0.85,
        )
        .from(
          scroll,
          {
            autoAlpha: 0,
            y: 20,
            duration: 0.7,
          },
          1,
        )

      gsap.to(chars, {
        backgroundPosition: "200% 50%",
        duration: 4.5,
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: 1.8,
        stagger: { each: 0.04, repeat: -1, yoyo: true },
      })

      gsap.to(flares, {
        x: "random(-40, 40)",
        y: "random(-30, 30)",
        scale: "random(0.85, 1.2)",
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      })

      if (content) {
        gsap.fromTo(
          content,
          { y: 0 },
          {
            y: 80,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={rootRef}>
      <NeuralField />
      <span className="hero-flare flare-a" aria-hidden="true" />
      <span className="hero-flare flare-b" aria-hidden="true" />
      <span className="hero-flare flare-c" aria-hidden="true" />

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
          <span className="line">{splitChars("Sampurna")}</span>
          <span className="line">{splitChars("Mandal")}</span>
        </h1>

        <p className="hero-headline hero-anim">{profile.headline}</p>

        <div className="hero-actions">
          <Magnetic strength={0.55}>
            <a className="btn-primary hero-anim" href="#contact">
              Get in touch
            </a>
          </Magnetic>
          <Magnetic strength={0.5}>
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
