import { useEffect, useRef } from "react"
import gsap from "gsap"

export function CursorTrail() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    document.documentElement.classList.add("has-cursor-trail")

    const dots = [...root.querySelectorAll<HTMLElement>(".cursor-dot")]
    const pos = dots.map(() => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }))
    const mouse = { x: pos[0].x, y: pos[0].y }

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const tick = () => {
      pos[0].x += (mouse.x - pos[0].x) * 0.35
      pos[0].y += (mouse.y - pos[0].y) * 0.35
      for (let i = 1; i < pos.length; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * 0.28
        pos[i].y += (pos[i - 1].y - pos[i].y) * 0.28
      }
      dots.forEach((dot, i) => {
        gsap.set(dot, { x: pos[i].x, y: pos[i].y })
      })
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    gsap.ticker.add(tick)

    const interactive = "a, button, .chip, .skill-tag, .magnetic, .hero-highlight, .project, .domain-item"
    const onOver = () => root.classList.add("is-hover")
    const onOut = () => root.classList.remove("is-hover")
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("pointerenter", onOver)
      el.addEventListener("pointerleave", onOut)
    })

    return () => {
      document.documentElement.classList.remove("has-cursor-trail")
      window.removeEventListener("pointermove", onMove)
      gsap.ticker.remove(tick)
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener("pointerenter", onOver)
        el.removeEventListener("pointerleave", onOut)
      })
    }
  }, [])

  return (
    <div className="cursor-trail" ref={rootRef} aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i} className={`cursor-dot cursor-dot-${i}`} />
      ))}
    </div>
  )
}
