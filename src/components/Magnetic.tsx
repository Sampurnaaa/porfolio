import {
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import gsap from "gsap"

type MagneticProps = {
  children: ReactNode
  className?: string
  strength?: number
  as?: "div" | "span"
} & HTMLAttributes<HTMLElement>

export function Magnetic({
  children,
  className,
  strength = 0.55,
  as = "div",
  ...rest
}: MagneticProps) {
  const rootRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const inner = innerRef.current
    if (!root || !inner) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const xTo = gsap.quickTo(inner, "x", { duration: 0.35, ease: "power3.out" })
    const yTo = gsap.quickTo(inner, "y", { duration: 0.35, ease: "power3.out" })
    const scaleTo = gsap.quickTo(inner, "scale", { duration: 0.35, ease: "power3.out" })

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect()
      const relX = e.clientX - rect.left - rect.width / 2
      const relY = e.clientY - rect.top - rect.height / 2
      xTo(relX * strength)
      yTo(relY * strength)
      scaleTo(1.06)
    }

    const onLeave = () => {
      xTo(0)
      yTo(0)
      scaleTo(1)
    }

    root.addEventListener("pointermove", onMove)
    root.addEventListener("pointerleave", onLeave)
    return () => {
      root.removeEventListener("pointermove", onMove)
      root.removeEventListener("pointerleave", onLeave)
    }
  }, [strength])

  const Tag = as

  return (
    <Tag
      ref={rootRef as never}
      className={`magnetic ${className ?? ""}`.trim()}
      style={{ display: "inline-flex" } as CSSProperties}
      {...rest}
    >
      <span ref={innerRef} className="magnetic-inner">
        {children}
      </span>
    </Tag>
  )
}
