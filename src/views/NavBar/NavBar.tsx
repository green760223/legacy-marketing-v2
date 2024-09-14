const NavBar = () => {
  return (
    <>
      <header className='fixed top-0 z-50 flex h-16 w-full items-center bg-background md:px-16 pt-8'>
        <div className='flex w-full justify-between items-center'>
          <div>
            <a
              href='#'
              className='flex items-center gap-2 text-lg font-semibold md:text-base'>
              <img
                src='/src/assets/Logo.png'
                alt='Logo'
                className='h-10 w-40 m-4'
              />
              <span className='sr-only'>Legacy Event</span>
            </a>
          </div>

          <div></div>
          <nav className='flex gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
            <a
              href='#'
              className='text-md text-foreground transition-colors hover:text-foreground tracking-widest'>
              首頁
            </a>
            <a
              href='#'
              className='text-md text-foreground transition-colors hover:text-foreground tracking-widest'>
              關於樂心
            </a>
            <a
              href='#'
              className='text-md text-foreground transition-colors hover:text-foreground tracking-widest'>
              服務項目
            </a>
            <a
              href='#'
              className='text-md text-foreground transition-colors hover:text-foreground tracking-widest'>
              成功案例
            </a>
            <a
              href='#'
              className='text-md text-foreground transition-colors hover:text-foreground tracking-widest'>
              聯絡我們
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default NavBar
