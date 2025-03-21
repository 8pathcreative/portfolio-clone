"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface BackgroundGradientProps {
  className?: string
  containerClassName?: string
  children?: React.ReactNode
  animate?: boolean
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: "small" | "medium" | "large"
  interactive?: boolean
  containerRef?: React.RefObject<HTMLDivElement>
}

export const BackgroundGradient = ({
  className,
  containerClassName,
  children,
  animate = true,
  gradientBackgroundStart = "rgb(0, 0, 0)",
  gradientBackgroundEnd = "rgb(0, 0, 0)",
  firstColor = "18, 18, 18",
  secondColor = "45, 45, 45",
  thirdColor = "45, 45, 45",
  fourthColor = "45, 45, 45",
  fifthColor = "45, 45, 45",
  pointerColor = "100, 100, 100",
  size = "medium",
  interactive = true,
  containerRef,
}: BackgroundGradientProps) => {
  const containerDivRef = useRef<HTMLDivElement>(null)
  const [curX, setCurX] = useState(0)
  const [curY, setCurY] = useState(0)
  const [tgX, setTgX] = useState(0)
  const [tgY, setTgY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart)
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd)
    document.body.style.setProperty("--first-color", firstColor)
    document.body.style.setProperty("--second-color", secondColor)
    document.body.style.setProperty("--third-color", thirdColor)
    document.body.style.setProperty("--fourth-color", fourthColor)
    document.body.style.setProperty("--fifth-color", fifthColor)
    document.body.style.setProperty("--pointer-color", pointerColor)
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
  ])

  useEffect(() => {
    function move() {
      if (!animate) {
        return
      }
      setCurX((curX) => curX + (tgX - curX) / 20)
      setCurY((curY) => curY + (tgY - curY) / 20)
      if (containerDivRef.current) {
        containerDivRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
      }
      requestAnimationFrame(move)
    }

    move()
  }, [animate, tgX, tgY])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) {
      return
    }
    const rect = (containerRef || containerDivRef).current?.getBoundingClientRect()
    if (rect) {
      setTgX(event.clientX - rect.left - rect.width / 2)
      setTgY(event.clientY - rect.top - rect.height / 2)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTgX(0)
    setTgY(0)
  }

  const sizeClasses = {
    small: "h-[200px] w-[200px]",
    medium: "h-[400px] w-[400px]",
    large: "h-[600px] w-[600px]",
  }

  return (
    <div
      className={cn("relative overflow-hidden flex items-center justify-center", containerClassName)}
      style={{
        zIndex: 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div
        className={cn("absolute inset-0 z-[-1] transition-opacity", isHovered ? "opacity-100" : "opacity-0")}
        style={{
          background: `radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0%, rgba(var(--pointer-color), 0) 60%)`,
          transform: `translate(${curX}px, ${curY}px)`,
        }}
      />
      <div
        ref={containerDivRef}
        className={cn("absolute z-[-1] transform-gpu blur-[60px] saturate-150 opacity-50", sizeClasses[size])}
        style={{
          background: `
            radial-gradient(circle at top left, rgba(var(--first-color), 0.8) 0%, rgba(var(--first-color), 0) 50%),
            radial-gradient(circle at top right, rgba(var(--second-color), 0.8) 0%, rgba(var(--second-color), 0) 50%),
            radial-gradient(circle at bottom left, rgba(var(--third-color), 0.8) 0%, rgba(var(--third-color), 0) 50%),
            radial-gradient(circle at bottom right, rgba(var(--fourth-color), 0.8) 0%, rgba(var(--fourth-color), 0) 50%),
            radial-gradient(circle at center, rgba(var(--fifth-color), 0.8) 0%, rgba(var(--fifth-color), 0) 50%)
          `,
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

