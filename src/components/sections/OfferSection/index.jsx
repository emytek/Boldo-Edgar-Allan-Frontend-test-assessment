import React from 'react'
import Services from './Services'
import Features from './Features'

const OfferSection = () => {
    const whiteContainerStyles = "flex flex-col self-stretch pb-20 w-full bg-neutral max-md:pl-5 max-md:max-w-full px-[60px] py-[35px]"

  return (
    <div className={whiteContainerStyles}>
      <Services />  
      <Features />
    </div>
  )
}

export default OfferSection