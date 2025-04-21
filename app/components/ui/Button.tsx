'use client'

import { forwardRef } from 'react'
import { cn } from '@/app/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium tracking-wide uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        // Variants
        variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
        variant === 'secondary' && 'bg-secondary text-white hover:bg-secondary/90',
        variant === 'outline' && 'border border-secondary bg-transparent text-secondary hover:bg-secondary/10',
        // Sizes
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-10 px-6 py-2',
        size === 'lg' && 'h-12 px-8 py-3 text-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button 