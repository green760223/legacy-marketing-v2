// import styles from "./NavBar.module.less"

const NavBar2 = () => {
  return (
    <div className='flex min-h-screen w-full flex-col '>
      <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 '>
        <div className='flex items-center w-full justify-between mx-4'>
          <a
            href='#'
            className='flex items-center gap-2 text-lg font-semibold md:text-base'>
            <img src='/src/assets/Logo.png' alt='Logo' className='h-10 w-40' />
            <span className='sr-only'>Legcay Event</span>
          </a>

          <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 '>
            <a
              href='#'
              className='text-muted-foreground transition-colors hover:text-foreground'>
              Dashboard
            </a>
            <a
              href='#'
              className='text-muted-foreground transition-colors hover:text-foreground'>
              Orders
            </a>
            <a
              href='#'
              className='text-muted-foreground transition-colors hover:text-foreground'>
              Products
            </a>
            <a
              href='#'
              className='text-muted-foreground transition-colors hover:text-foreground'>
              Customers
            </a>
            <a
              href='#'
              className='text-foreground transition-colors hover:text-foreground'>
              Settings
            </a>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar2
