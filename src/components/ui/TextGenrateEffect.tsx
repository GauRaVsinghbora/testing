import { useEffect } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { cn } from "../../lib/utils.ts"

export const TextGenerateEffect = ({
  words,
  className,
  Loader,
}: {
  words: string
  className?: string
  Loader?: boolean
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(" ")
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`text-center text-3xl md:text-[54px] md:leading-[60px] tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text opacity-0 font-bold ${
                Loader && "bold-logo-font italic"
              }`}
            >
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
