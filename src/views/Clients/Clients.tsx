const modules = import.meta.glob("@/assets/clients/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>

// Generate logos array from imported modules
const logos = Object.entries(modules).map(([path, url]) => {
  const file = path.split("/").pop() || ""
  const base = file.replace(/\.[^.]+$/, "")
  const label = base
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
  return { url, label }
})

function Clients() {
  return (
    <section aria-labelledby='clients-title' className='w-full py-10'>
      <div className='max-w-7xl mx-auto px-8 py-8'>
        {/* Header */}
        <div className='text-center mb-12 pb-10'>
          <h2
            id='clients-title'
            className='text-3xl lg:text-4xl font-semibold text-black dark:text-white tracking-wide pb-4'>
            我們的合作夥伴
          </h2>
          <p className='mt-4 text-base lg:text-lg text-neutral-600 dark:text-neutral-300 tracking-wide'>
            與世界領先企業攜手合作，打造值得信賴的解決方案
          </p>
          <p className='mt-2 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
            Trusted by Leading Global Enterprises
          </p>
        </div>

        {/* Marquee section */}
        <div className='overflow-hidden relative group pb-40'>
          <div className='flex w-max animate-marquee gap-8 sm:gap-12 lg:gap-20 group-hover:[animation-play-state:paused]'>
            {logos.concat(logos).map((logo, idx) => (
              <div
                key={idx}
                className='flex-shrink-0 flex h-16 w-36 sm:h-20 sm:w-44 lg:h-24 lg:w-56 items-center justify-center'>
                <img
                  src={logo.url}
                  alt={logo.label}
                  loading='lazy'
                  decoding='async'
                  sizes='(min-width:1024px) 14rem, (min-width:640px) 11rem, 9rem'
                  className='max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className='pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent' />
          <div className='pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent' />
        </div>
      </div>
    </section>
  )
}

export default Clients
