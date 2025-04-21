'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'
import { cn } from '@/app/lib/utils'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen)
    }
  }

  return (
    <header className="w-full bg-[#2B2B2B] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="w-full md:w-1/4">
            <div className="logo-container py-2">
              <Link href="/" className="inline-block" aria-label="Bruz Beers Home">
                <Image 
                  src="/images/bruz-logo.png" 
                  alt="Bruz Beers"
                  width={180}
                  height={80}
                  priority
                  className="invert brightness-0 invert"
                />
              </Link>
            </div>
          </div>
          
          {/* Right Column: Social & Nav */}
          <div className="w-full md:w-3/4 flex flex-col">
            {/* Social Icons */}
            <div className="hidden md:flex justify-end mb-2">
              <ul className="flex space-x-4 items-center">
                <li>
                  <Link 
                    href="https://www.instagram.com/bruzbeers/" 
                    className="text-white text-xl hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bruz Beers Instagram"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.facebook.com/bruzbeers/" 
                    className="text-white text-xl hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bruz Beers Facebook"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://twitter.com/bruzbeers" 
                    className="text-white text-xl hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bruz Beers Twitter"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li className="ml-4">
                  <Link 
                    href="#" 
                    className="text-white hover:text-primary transition-colors flex items-center"
                    aria-label="Find our beer"
                  >
                    <FaMapMarkerAlt className="mr-2" /> Find our beer
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Navigation */}
            <nav className="relative">
              <div className="md:hidden flex justify-end">
                <button 
                  className="flex flex-col justify-center items-center w-10 h-10 border-none bg-transparent"
                  onClick={handleToggle}
                  onKeyDown={handleKeyDown}
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation menu"
                  tabIndex={0}
                >
                  <span className={cn(
                    "block w-6 h-0.5 bg-white transition-all duration-300",
                    isOpen && "transform rotate-45 translate-y-1.5"
                  )}></span>
                  <span className={cn(
                    "block w-6 h-0.5 bg-white my-1.5 transition-opacity duration-300",
                    isOpen && "opacity-0"
                  )}></span>
                  <span className={cn(
                    "block w-6 h-0.5 bg-white transition-all duration-300",
                    isOpen && "transform -rotate-45 -translate-y-1.5"
                  )}></span>
                </button>
              </div>
              
              <div className={cn(
                "md:block",
                isOpen ? "block" : "hidden"
              )}>
                <ul className="flex flex-col md:flex-row md:justify-center md:mx-auto text-center space-x-0 md:space-x-12">
                  <NavItem href="/" active>HOME</NavItem>
                  <NavItem href="/shop">SHOP</NavItem>
                  <NavItem href="/our-beer">OUR BEER</NavItem>
                  <NavItem href="/our-story">OUR STORY</NavItem>
                  <NavItem href="/contact">CONTACT</NavItem>
                  <NavItem href="/blog">BLOG</NavItem>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="h-1 bg-primary w-full"></div>
    </header>
  )
}

type NavItemProps = {
  href: string
  children: React.ReactNode
  active?: boolean
}

const NavItem = ({ href, children, active = false }: NavItemProps) => {
  return (
    <li className="relative py-2 md:py-3">
      <Link 
        href={href} 
        className={cn(
          "block font-medium tracking-wide text-sm md:text-base hover:text-primary transition-colors",
          active ? "text-primary" : "text-white"
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export default Header 