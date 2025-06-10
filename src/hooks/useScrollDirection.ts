import { useEffect, useState } from 'react'

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      if (direction !== setDirection) {
        setDirection(direction)
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [])

  return { direction, scrollY }
}
