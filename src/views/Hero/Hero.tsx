import { HeroParallax } from "@/components/ui/hero-parallax"
import { heroSection } from "@/constants/index"

function Hero() {
  return (
    <div>
      <HeroParallax products={heroSection} />
    </div>
  )
}

export default Hero
