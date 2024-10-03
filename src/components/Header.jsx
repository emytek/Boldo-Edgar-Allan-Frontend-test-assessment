import React from 'react'
import Logo from './ui/Logo'
import Navigation from './ui/Navigation'

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between py-px w-full max-md:mr-2 max-md:max-w-full">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header