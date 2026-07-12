import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 56 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.05,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "restart none restart reverse",
            invalidateOnRefresh: true,
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [delay, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
  selector?: string
  as?: ElementType
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  selector = ":scope > *",
  as: Tag = "div",
}: StaggerProps) {
  const ref = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const items = el.querySelectorAll(selector)
    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 48, rotateX: 8 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.95,
          stagger,
          ease: "power3.out",
          transformOrigin: "center top",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "restart none restart reverse",
            invalidateOnRefresh: true,
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [selector, stagger])

  return (
    <Tag ref={ref} className={className} style={{ perspective: 900 }}>
      {children}
    </Tag>
  )
}

/** Kept for API compatibility — GSAP Stagger now drives motion. */
export const fadeUp = {}
