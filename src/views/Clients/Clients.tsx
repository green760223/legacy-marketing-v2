const logos = Object.values(
  import.meta.glob("@/assets/clients/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>
)

function Clients() {
  return (
    <div className='w-full py-16'>
      <div className='max-w-7xl mx-auto px-8 overflow-hidden group relative'>
        <div className='flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]'>
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className='flex-shrink-0 flex h-22 w-56 items-center justify-center'>
              <img
                src={logo}
                alt={`Client logo ${idx}`}
                className='max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300'
              />
            </div>
          ))}
        </div>

        {/* left gradient */}
        <div className='pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent' />
        {/* right gradient */}
        <div className='pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent' />
      </div>
    </div>
  )
}

export default Clients
