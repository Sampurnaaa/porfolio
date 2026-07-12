import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let nodes: Node[] = []
    let raf = 0
    let w = 0
    let h = 0
    const mouse = { x: -9999, y: -9999 }
    let reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(52, Math.floor((w * h) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        r: 1.4 + Math.random() * 2.8,
      }))
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const grad = ctx.createRadialGradient(w * 0.72, h * 0.28, 0, w * 0.72, h * 0.28, w * 0.55)
      grad.addColorStop(0, "rgba(20, 184, 166, 0.14)")
      grad.addColorStop(0.45, "rgba(217, 119, 6, 0.07)")
      grad.addColorStop(1, "rgba(243, 247, 245, 0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      for (const n of nodes) {
        if (!reduced) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < 180 && dist > 0.1) {
            const force = (180 - dist) / 180
            n.vx += (dx / dist) * force * 0.22
            n.vy += (dy / dist) * force * 0.22
          }

          n.vx *= 0.99
          n.vy *= 0.99
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
          n.x = Math.max(0, Math.min(w, n.x))
          n.y = Math.max(0, Math.min(h, n.y))
        }
      }

      const linkDist = Math.min(210, w * 0.24)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.4
            ctx.strokeStyle = `rgba(15, 118, 110, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.fillStyle = "rgba(11, 31, 28, 0.6)"
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.fillStyle = "rgba(245, 158, 11, 0.65)"
        ctx.arc(n.x, n.y, n.r * 0.35, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduced) raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div className="hero-visual" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
