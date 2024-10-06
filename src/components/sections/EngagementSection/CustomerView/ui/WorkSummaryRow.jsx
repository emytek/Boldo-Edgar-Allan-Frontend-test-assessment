import React from 'react'

const WorkSummaryRow = ({ text, imgUrl, isPrimary }) => {
  return (
    <>
    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-28 px-2 lg:px-4">
          <p className="text-base lg:text-xl font-normal">
            {text}
          </p>
          <img
            className="w-6 h-6 lg:w-8 lg:h-8"
            src={imgUrl}
            alt="check-mark"
          />
        </div>
        <hr className={`w-full border-t ${isPrimary ? "border-primary" : "border-lightGray"} my-2`} />
   </>
  )
}

export default WorkSummaryRow