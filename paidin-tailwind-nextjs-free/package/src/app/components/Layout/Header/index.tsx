'use client'
import Link from 'next/link'

import Logo from './Logo'
const Header: React.FC = () => {




  return (
    <header
      className={`z-40 w-full transition-all fixed top-0 duration-300 
          'shadow-lg bg-white py-3' : 'shadow-none bg-transparent py-3'
      }`}>
      <div>
        <div className='container flex items-center justify-between'>
          <div>
            <Logo />
          </div>
          <div className='flex items-center gap-4'>
            <Link
              href='#'
              className='bg-primary text-white hover:bg-transparent hover:text-primary border border-primary px-6 py-2 rounded-full font-medium text-base'
            >
              Nhận tài liệu
            </Link>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
