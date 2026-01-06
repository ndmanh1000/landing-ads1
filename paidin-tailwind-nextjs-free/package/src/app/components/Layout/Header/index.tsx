'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import Logo from './Logo'
import SignUp from '@/app/components/Auth/SignUp'
import { Icon } from '@iconify/react/dist/iconify.js'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const signUpRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isSignUpOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignUpOpen])

  return (
    <header
      className={`z-40 w-full transition-all fixed top-0 duration-300 ${
        sticky ? 'shadow-lg bg-white py-3' : 'shadow-none bg-transparent py-3'
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
              onClick={() => {
                setIsSignUpOpen(true)
              }}>
              Nhận tài liệu
            </Link>
            {isSignUpOpen && (
              <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 p-4'>
                <div
                  ref={signUpRef}
                  className='relative mx-auto w-full bg-white max-w-md overflow-hidden rounded-lg bg-dark_grey/90 backdrop-blur-md px-4 sm:px-8 pt-12 sm:pt-14 pb-6 sm:pb-8 text-center'>
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className='absolute top-4 right-4 sm:top-6 sm:right-6 hover:cursor-pointer z-10'
                    aria-label='Close Sign Up Modal'>
                    <Icon
                      icon='mdi:close'
                      className='text-gray-600 hover:text-gray-900 text-2xl sm:text-3xl transition-colors'
                    />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
