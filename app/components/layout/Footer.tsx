'use client'

import Link from 'next/link'
import { FaMapMarker, FaEnvelope, FaPhone, FaInstagram, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Useful Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Useful</h6>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/shop">Shop</FooterLink>
              <FooterLink href="/our-story">Our story</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="#">Login</FooterLink>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Help</h6>
            <ul className="space-y-2">
              <FooterLink href="#">Customer service</FooterLink>
              <FooterLink href="#">Find our beer</FooterLink>
              <FooterLink href="#">Recent orders</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="#">Terms &amp; Privacy</FooterLink>
            </ul>
          </div>
          
          {/* Beer Styles */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Beer Styles</h6>
            <ul className="space-y-2">
              <FooterLink href="#">Belgian Blondes</FooterLink>
              <FooterLink href="#">Tripels & Dubbels</FooterLink>
              <FooterLink href="#">Saisons</FooterLink>
              <FooterLink href="#">Specialty Ales</FooterLink>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Contact Information</h6>
            <address className="not-italic">
              <p className="flex items-center mb-2">
                <FaMapMarker className="mr-2 flex-shrink-0" /> 
                <span>1675 W 67th Ave #100, Denver, CO 80221</span>
              </p>
              <p className="flex items-center mb-2">
                <FaEnvelope className="mr-2 flex-shrink-0" /> 
                <a href="mailto:info@bruzbeers.com" className="hover:text-primary transition-colors">
                  info@bruzbeers.com
                </a>
              </p>
              <p className="flex items-center mb-4">
                <FaPhone className="mr-2 flex-shrink-0" /> 
                <a href="tel:3036502337" className="hover:text-primary transition-colors">
                  (303) 650-2337
                </a>
              </p>
            </address>
            
            {/* Social Icons */}
            <ul className="flex space-x-4">
              <li>
                <Link 
                  href="https://www.instagram.com/bruzbeers/" 
                  className="text-white text-2xl hover:text-primary transition-colors"
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
                  className="text-white text-2xl hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bruz Beers Facebook"
                >
                  <FaFacebookSquare />
                </Link>
              </li>
              <li>
                <Link 
                  href="https://twitter.com/bruzbeers" 
                  className="text-white text-2xl hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bruz Beers Twitter"
                >
                  <FaTwitterSquare />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>{new Date().getFullYear()} &copy; Bruz Beers</p>
        </div>
      </div>
    </footer>
  )
}

type FooterLinkProps = {
  href: string
  children: React.ReactNode
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-300 hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}

export default Footer 