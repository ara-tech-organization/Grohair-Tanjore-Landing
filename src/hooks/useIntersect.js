import { useEffect, useRef } from 'react'

export function useIntersect(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const revealAll = () => {
      el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        .forEach((t) => t.classList.add('reveal-visible'))
    }

    // Safety fallback: if observer never fires, reveal everything after 1.5s
    const fallback = setTimeout(revealAll, 1500)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 0px 0px', ...options }
    )

    const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    targets.forEach((t) => observer.observe(t))

    if (
      el.classList.contains('reveal') ||
      el.classList.contains('reveal-left') ||
      el.classList.contains('reveal-right') ||
      el.classList.contains('reveal-scale')
    ) {
      observer.observe(el)
    }

    return () => {
      clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])

  return ref
}
