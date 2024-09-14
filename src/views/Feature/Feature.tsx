import React from "react"
import { cn } from "@/lib/utils"
import createGlobe from "cobe"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { IconBrandYoutubeFilled } from "@tabler/icons-react"

export function Feature() {
  const features = [
    {
      title: "整合規劃",
      description:
        "樂心擁有豐富的幕前與幕後活動經驗，為您量身打造獨特難忘的體驗。無論是企業活動、研討會、家庭日、運動會或產品發表會，我們從規劃到執行，細心掌握每個細節，讓您輕鬆享受活動。選擇樂心，就是選擇專業、創意與安心！",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "活動執行",
      description: "樂心注重整體視覺，從整體色系搭配到主視覺設計細心為您把關！",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "精湛表演",
      description:
        "從豐富多元的藝人、表演等精彩演出，乃至舞台、燈光音響設計，樂心提供多樣化方案任您選擇！",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "全球服務",
      description:
        "樂心專為國際客戶提供專業活動規劃服務，我們將為您量身打造跨國活動方案，確保每個細節完美呈現。",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]
  return (
    <div className='relative py-40 z-20 max-w-7xl mx-auto'>
      <div className='px-8'>
        <h4 className='text-3xl lg:text-3xl lg:leading-tight max-w-5xl mx-auto text-center tracking-widest font-medium text-black dark:text-white '>
          樂心國際、用心為您
        </h4>

        <p className='text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300 tracking-widest'>
          Legacy Marketing, We Creating Your Legacy
        </p>
      </div>

      <div className='relative'>
        <div className='grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className='h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className='max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug'>
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-4"
      )}>
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className='relative flex pt-5 px-2 gap-10 h-full'>
      <div className='w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2'>
          {/* TODO */}
          <img
            src='https://bababcb.webp.li/2018-Western-Digital-Computex.webp'
            alt='header'
            width={800}
            height={800}
            className='h-full w-full aspect-square object-cover object-center'
          />
        </div>
      </div>

      <div className='absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none' />
      <div className='absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none' />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <a
      href='https://www.youtube.com/watch?v=7-bDCAPGDZY'
      target='__blank'
      className='relative flex gap-10 h-full group/image'>
      <div className='w-full  mx-auto bg-transparent dark:bg-transparent group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2  relative'>
          {/* TODO */}
          <IconBrandYoutubeFilled className='h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto ' />
          <img
            src='https://bababcb.webp.li/2023-Weidoe-Spring-Party.webp'
            alt='header'
            width={1000}
            height={800}
            className='h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200'
          />
        </div>
      </div>
    </a>
  )
}

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  }
  return (
    <div className='relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden'>
      {/* TODO */}
      <div className='flex flex-row -ml-20'>
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden'>
            <img
              src={image}
              alt='bali images'
              width='500'
              height='500'
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0'
            />
          </motion.div>
        ))}
      </div>
      <div className='flex flex-row'>
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden'>
            <img
              src={image}
              alt='bali images'
              width='500'
              height='500'
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0'
            />
          </motion.div>
        ))}
      </div>

      <div className='absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none' />
      <div className='absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none' />
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className='h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10'>
      <Globe className='absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72' />
    </div>
  )
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [23.4685559, 116.8591269], size: 0.05 }, // Taiwan
        { location: [35.780287, 104.1374349], size: 0.05 }, // China
        { location: [1.3146649, 103.5146037], size: 0.05 }, // Singapore
        { location: [38.59065028993193, -121.27863557402364], size: 0.05 }, // San Francisco
        { location: [47.69675961641004, 8.63892495986632], size: 0.05 }, // Switzerland
        { location: [46.596899837170774, 2.5381142014090488], size: 0.05 }, // France
        { location: [30.976568722043034, 34.943663627864225], size: 0.05 }, // Israel
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.003
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  )
}
