'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  light?: boolean
  duration?: number
}

export default function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  light = false,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const startValue = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (value - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <div className={`
        font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-none mb-2
        ${light ? 'text-white' : 'text-primary-dark'}
      `}>
        {prefix}{count}{suffix}
      </div>
      <div className={`
        text-sm font-semibold uppercase tracking-wider
        ${light ? 'text-white/60' : 'text-neutral-500'}
      `}>
        {label}
      </div>
    </div>
  )
}
