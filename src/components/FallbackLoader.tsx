import Lottie from "lottie-react"
import LottieFile from "../assets/LoaderLottie.json"

export const FallbackLoader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white">
      <Lottie animationData={LottieFile} loop={true} autoplay={true} />
    </div>
  )
}
