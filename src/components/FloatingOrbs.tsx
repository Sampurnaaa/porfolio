import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const ORBS = [
  { className: "orb orb-a", x: "12%", y: "18%" },
  { className: "orb orb-b", x: "78%", y: "22%" },
  { className: "orb orb-c", x: "18%", y: "68%" },
  { className: "orb orb-d", x: "72%", y: "74%" },
  { className: "orb orb-e", x: "48%", y: "42%" },
]

export function FloatingOrbs() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".orb").forEach((orb, i) => {
        gsap.to(orb, {
          x: gsap.utils.random(-140, 140),
          y: gsap.utils.random(-110, 110),
          scale: gsap.utils.random(0.7, 1.45),
          rotation: gsap.utils.random(-25, 25),
          duration: gsap.utils.random(3.2, 6.5),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.25,
        })
        gsap.to(orb, {
          opacity: gsap.utils.random(0.3, 0.7),
          duration: gsap.utils.random(1.8, 3.5),
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.15,
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div className="floating-orbs" ref={rootRef} aria-hidden="true">
      {ORBS.map((o) => (
        <span key={o.className} className={o.className} style={{ left: o.x, top: o.y }} />
      ))}
    </div>
  )
}
