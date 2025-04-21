'use client'

import { useState, useEffect, useRef } from 'react'

interface CounterProps {
  end: number
  duration?: number
  label: string
  icon: React.ReactNode
}

const Counter = ({
  end,
  duration = 2000,
  label,
  icon
}: CounterProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!countRef.current) return
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          
          const startTime = performance.now()
          const startValue = 0
          
          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration
              const easeProgress = easeOutCubic(progress)
              const currentValue = Math.floor(easeProgress * (end - startValue) + startValue)
              
              setCount(currentValue)
              requestAnimationFrame(updateCounter)
            } else {
              setCount(end)
            }
          }
          
          requestAnimationFrame(updateCounter)
        }
      })
    }
    
    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    })
    
    observer.current.observe(countRef.current)
    
    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [end, duration])
  
  // Easing function for smoother animation
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3)
  }
  
  return (
    <div className="counter flex flex-col items-center text-center">
      <div className="mb-4">
        {icon}
      </div>
      <span ref={countRef} className="text-4xl font-bold mb-2">{count}</span>
      <div className="text-sm">{label}</div>
    </div>
  )
}

export default Counter 