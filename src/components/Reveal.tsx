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

export function Reveal({ children, className, delay = 0, y = 90 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const inner = el.querySelector<HTMLElement>(".reveal-inner")
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y,
          scale: 0.92,
          rotateX: 10,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.1,
          delay,
          ease: "power4.out",
          clearProps: "filter",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "restart none restart reverse",
            invalidateOnRefresh: true,
          },
        },
      )

      if (inner) {
        gsap.fromTo(
          inner,
          { y: 24 },
          {
            y: -24,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          },
        )
      }
    }, ref)

    return () => ctx.revert()
  }, [delay, y])

  return (
    <div ref={ref} className={className} style={{ transformStyle: "preserve-3d" }}>
      <div className="reveal-inner">{children}</div>
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
  stagger = 0.07,
  selector = ":scope > *",
  as: Tag = "div",
}: StaggerProps) {
  const ref = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const items = el.querySelectorAll(selector)
    if (!items.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          y: 70,
          x: -18,
          scale: 0.9,
          rotateY: -14,
        },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.95,
          stagger: {
            each: stagger,
            from: "start",
          },
          ease: "back.out(1.5)",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "restart none restart reverse",
            invalidateOnRefresh: true,
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [selector, stagger])

  return (
    <Tag ref={ref} className={className} style={{ perspective: 1400 }}>
      {children}
    </Tag>
  )
}

export const fadeUp = {}
