"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "16px",
  ry = "16px",
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: any
  [key: string]: any
}) => {
  return (
    <Component className={cn("relative p-[1px] overflow-hidden", containerClassName)} {...otherProps}>
      <div className={cn("absolute inset-0 z-[1]", borderClassName)}>
        <svg width="100%" height="100%">
          <rect
            pathLength="100"
            width="100%"
            height="100%"
            rx={rx}
            ry={ry}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={cn("motion-safe:animate-border", "text-white")}
            style={
              {
                "--duration": `${duration}ms`,
              } as React.CSSProperties
            }
          />
        </svg>
      </div>
      <div className={cn("relative z-[2] bg-black", className)}>{children}</div>
    </Component>
  )
}

