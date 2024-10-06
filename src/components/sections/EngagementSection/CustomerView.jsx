import React from "react";
import WorkSummary from "../../ui/WorkSummary";

const CustomerView = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center py-8 px-4 lg:px-16">
        <img
          src="/images/customer-view.png"
          alt="Responsive"
          className="w-full sm:w-12/12 lg:w-11/12 object-cover rounded-lg shadow-lg"
        />
      </div>

      <WorkSummary />
    </>
  );
};

export default CustomerView;

