import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
      autoRaf: false,
    })

    lenis.on("scroll", ScrollTrigger.update)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    document.documentElement.classList.add("lenis", "lenis-smooth")

    lenis.scrollTo(0, { immediate: true })
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null
      if (!target) return
      const hash = target.getAttribute("href")
      if (!hash || hash === "#") return
      const el = document.querySelector(hash)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.2 })
      history.pushState(null, "", hash)
    }

    document.addEventListener("click", onClick)

    return () => {
      document.removeEventListener("click", onClick)
      gsap.ticker.remove(tick)
      lenis.destroy()
      document.documentElement.classList.remove("lenis", "lenis-smooth")
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}
