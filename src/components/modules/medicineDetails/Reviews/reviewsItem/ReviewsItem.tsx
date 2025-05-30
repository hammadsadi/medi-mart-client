import { TReview } from "@/types/reviews";
import { getTimeDifference } from "@/utils/getTimeDifference";
import Image from "next/image";
import React from "react";

const ReviewsItem = ({ review }: { review: TReview }) => {
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-200 text-black ">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <Image
              src={
                review?.userId?.image ||
                "https://res.cloudinary.com/djlpoyqau/image/upload/v1741195711/clinets-profile_gwta7f.png"
              }
              width={400}
              height={400}
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
              alt="Review Image"
            />
          </div>
          <div>
            <h4 className="font-bold">{review?.userId?.name}</h4>
            <span className="text-xs text-gray-400">
              {getTimeDifference(review?.createdAt)}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current"
          >
            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
          </svg>
          <span className="text-xl font-bold">{review?.ratings}</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm">{review?.review}</div>
    </div>
  );
};

export default ReviewsItem;
