import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { TextGenerateEffect } from "./ui/TextGenrateEffect"
import logoImage from "../assets/LogoOnly.png"

export const Loader = ({ onComplete }: { onComplete?: () => void }) => {
  const [showText, setShowText] = useState(false)
  const [exitAnimation, setExitAnimation] = useState(false)

  useEffect(() => {
    const textTimeout = setTimeout(() => setShowText(true), 1000)

    const exitTimeout = setTimeout(() => {
      setExitAnimation(true)
      setTimeout(() => {
        if (onComplete) onComplete()
      }, 1000)
    }, 2000)

    return () => {
      clearTimeout(textTimeout)
      clearTimeout(exitTimeout)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-slate-100 overflow-x-clip z-50"
      initial={{ opacity: 1 }}
      animate={
        exitAnimation
          ? {
              y: "-100vh",
              borderRadius: "0 0 50% 50%",
              opacity: 0,
              backgroundColor: "black",
            }
          : {}
      }
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute flex justify-center items-center"
        initial={{ x: "-100vw", y: "100vh", scale: 0 }}
        animate={!exitAnimation ? { x: 0, y: 0, scale: 1 } : {}}
        transition={{
          duration: 1.5,
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
      >
        <motion.img
          src={logoImage}
          alt="Logo"
          className="object-contain size-52"
        />
      </motion.div>

      {showText && !exitAnimation && (
        <TextGenerateEffect
          words="Fly Charters"
          className="mt-40 text-[#001E80]"
          Loader={true}
        />
      )}
    </motion.div>
  )
}
