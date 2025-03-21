"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const TextReveal = ({
  text,
  className,
  once = false,
  delay = 0,
  ...props
}: {
  text: string
  className?: string
  once?: boolean
  delay?: number
  [key: string]: any
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={cn("font-bold", className)}
      {...props}
    >
      <motion.span
        variants={{
          visible: {
            y: 0,
            transition: {
              staggerChildren: 0.05,
            },
          },
          hidden: {
            y: 0,
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="inline-block whitespace-nowrap"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                },
              },
              hidden: {
                y: "100%",
                opacity: 0,
                transition: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  )
}

