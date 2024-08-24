import React from "react"

export const MenuItem = ({
  setActive,
  item,
}: {
  setActive: (item: string) => void
  item: string
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative'>
      <p className='cursor-pointer text-black hover:opacity-[0.9] dark:text-white'>
        {item}
      </p>
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6'>
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <a href={href} className='flex space-x-2'>
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className='flex-shrink-0 rounded-md shadow-2xl'
      />
      <div>
        <h4 className='text-xl font-bold mb-1 text-black dark:text-white'>
          {title}
        </h4>
        <p className='text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300'>
          {description}
        </p>
      </div>
    </a>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className='text-neutral-700 dark:text-neutral-200 hover:text-black '>
      {children}
    </a>
  )
}
