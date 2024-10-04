import React from 'react'
import CustomerView from '../CustomerView'
import Blog from '../Blog'
import CallToAction from '../CallToAction'
import Footer from '../../layout/Footer'

const EngagementSection = () => {
    const whiteContainerStyles = "flex flex-col self-stretch pb-20 w-full bg-neutral max-md:pl-5 max-md:max-w-full px-[60px] py-[35px]"

  return (
    <div className={whiteContainerStyles}>
       <CustomerView /> 
       <Blog />
       <CallToAction />
       <Footer />
    </div>
  )
}

export default EngagementSection