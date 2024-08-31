import { useState } from "react"
import { Menu, MenuItem } from "@/components/ui/narbar-menu"
import { cn } from "@/lib/utils"

const NavBar = ({ className }: { className?: string }) => {
  const [_active, setActive] = useState<string | null>(null)

  return (
    <div
      className={cn("fixed inset-x-0 max-w-7xl mx-auto z-50 top-5", className)}>
      <Menu setActive={setActive}>
        <div className=' flex justify-between items-center w-full h-10 text-xl mr-10'>
          <div>
            <h1>
              <a href=''>logo</a>
            </h1>
          </div>
          <div className='flex space-x-12'>
            <MenuItem setActive={setActive} item='Services' />
            <MenuItem setActive={setActive} item='Products' />
            <MenuItem setActive={setActive} item='Pricing' />
          </div>
        </div>
      </Menu>
    </div>
  )
}

export default NavBar
