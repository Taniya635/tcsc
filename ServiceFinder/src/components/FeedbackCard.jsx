import React from "react";

function FeedbackCard({data}) {
  return (
    <div className="w-70  rounded-xl border overflow-hidden p-2  bg-[#DBEAFE] shrink-0   transition-transform transition-shadow duration-300 ease-out
    hover:scale-110
    hover:z-10
    hover:shadow-2xl">
      <div className="flex items-center border-b gap-5 p-2 ">
        <div className="h-12 w-12 rounded-full  overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={data.image}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold">{data.name}</h3>
          <p className="text-gray-500">{data.location}</p>
        </div>
      </div>
      <div className="p-2 ">
        <p className="text-md">{data.feedback}</p>
      </div>
    </div>
  );
}

export default FeedbackCard;
