import { useEffect, useRef, useState } from 'react'

export interface TimerProps {
  secods?: number
  onTimeEnd?: () => void
}

const defaultSeconds = 30

export default function Timer({ secods: initTime, onTimeEnd }: TimerProps) {
  const [time, setTime] = useState(initTime ?? defaultSeconds)
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  useEffect(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => {
      if (time === 0 && onTimeEnd) {
        onTimeEnd()
      }
      setTime((t) => t - 1)

      clearInterval(timer.current)
    }, 1000)

    return () => clearInterval(timer.current)
  }, [])

  return <h1>{time}</h1>
}
