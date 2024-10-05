import React from 'react'
import Header from '../../layout/Header'
import Hero from './Hero'
import Partners from './Partners'

const MainSection = () => {
    const darkContainerStyles = "flex flex-col self-stretch pb-20 w-full bg-primary max-md:pl-5 max-md:max-w-full px-[60px] py-[35px]"

  return (
    <div className={darkContainerStyles}>
        <Header />
        <Hero />
        <Partners />
    </div>
  )
}

export default MainSection