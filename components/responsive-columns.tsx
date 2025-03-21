"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveColumnsProps {
  children: React.ReactNode[]
  className?: string
}

export function ResponsiveColumns({ children, className }: ResponsiveColumnsProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (isMobile) {
    return <div className={cn("flex flex-col", className)}>{children}</div>
  }

  return <div className={cn("flex", className)}>{children}</div>
}

