'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypeWriterProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delay?: number
}

export default function TypeWriter({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 2000 
}: TypeWriterProps) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = texts[currentIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), delay)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    } else {
      timeout = setTimeout(() => {
        const updatedText = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)

        setCurrentText(updatedText)
      }, isDeleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts, speed, deleteSpeed, delay])

  return (
    <span className="relative">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute right-0 translate-x-1 text-primary"
      >
        |
      </motion.span>
    </span>
  )
}
