import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'dark' | 'white' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  external?: boolean
  fullWidth?: boolean
}

const variantStyles = {
  primary: 'bg-accent text-white hover:bg-accent-light shadow-sm hover:shadow-md border-2 border-accent',
  secondary: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
  dark: 'bg-primary-dark text-white hover:bg-primary-deeper border-2 border-primary-dark',
  white: 'bg-white text-primary-dark hover:bg-neutral-100 border-2 border-white',
  ghost: 'bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10',
}

const sizeStyles = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  external = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 
    rounded-full font-semibold font-jakarta 
    transition-all duration-300 
    cursor-pointer
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
