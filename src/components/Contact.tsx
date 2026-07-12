import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { profile } from "../data/content"
import { Magnetic } from "./Magnetic"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const panelRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = panelRef.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 80, scale: 0.94, rotateX: 6 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "restart none restart reverse",
            invalidateOnRefresh: true,
          },
        },
      )
    }, panelRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-panel" ref={panelRef}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let’s build the next system together.</h2>
          <p className="section-lead">
            Open to Data Scientist, ML Engineer, AI Engineer, GenAI Engineer, and Forward Deployed
            Engineer opportunities. Reach out for collaborations, roles, or a quick chat.
          </p>

          <div className="contact-links">
            <Magnetic strength={0.45}>
              <a className="primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Magnetic>
            {profile.phones.map((phone) => (
              <Magnetic key={phone} strength={0.35}>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </Magnetic>
            ))}
          </div>
        </div>

        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>ML / AI Engineer · Data Engineer · IIT Kharagpur</span>
        </footer>
      </div>
    </section>
  )
}
