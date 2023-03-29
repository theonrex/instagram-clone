import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getFirstData,
  getsecondData,
  getThirdData,
  getForthData,
  getFifthData,
  getSixthData,
} from "@/utils/exploreConstants";

export default function Explore() {
  let getFirstDataReels: string = getFirstData?.reels || "";
  let getsecondDataReels: string = getsecondData?.reels || "";
  let getThirdDataReels: string = getThirdData?.reels || "";
  let getForthDataReels: string = getForthData?.reels || "";
  let getFifthDataReels: string = getFifthData?.reels || "";
  let getSixthDataReels: string = getSixthData?.reels || "";

  return (
    <div>
      <div className="grid-container ">
        <div className="item1 relative">
          <Link
            href="#"
            className=" flex relative  items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Image
              key={getFirstData.id}
              src={getFirstData.url}
              alt={`Image`}
              width={700}
              height={700}
              className=" w-full aspect-square"
            />
            <Image
              src={getFirstDataReels}
              alt={`Image`}
              width={40}
              height={40}
              className="absolute right-0 top-0 mr-6 mt-5 aspect-square"
            />
          </Link>
        </div>
        <div className="">
          <Link
            href="#"
            className=" flex relative items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Image
              key={getsecondData.id}
              src={getsecondData.url}
              alt={`Image`}
              width={700}
              height={700}
              className=" w-full aspect-square"
            />
            <Image
              src={getsecondDataReels}
              alt={`Image`}
              width={40}
              height={40}
              className="absolute right-0 top-0 mr-6 mt-5 aspect-square"
            />
          </Link>
        </div>
        <div className="">
          <Link
            href="#"
            className=" flex relative items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Image
              key={getThirdData.id}
              src={getThirdData.url}
              alt={`Image`}
              width={700}
              height={700}
              className=" w-full aspect-square"
            />
            <Image
              src={getThirdDataReels}
              alt={`Image`}
              width={40}
              height={40}
              className="absolute right-0 top-0 mr-6 mt-5 aspect-square"
            />
          </Link>
        </div>{" "}
        <div className="">
          <Link
            href="#"
            className=" flex relative items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Image
              key={getForthData.id}
              src={getForthData.url}
              alt={`Image`}
              width={700}
              height={700}
              className=" w-full aspect-square"
            />
            <Image
              src={getForthDataReels}
              alt={`Image`}
              width={40}
              height={40}
              className="absolute right-0 top-0 mr-6 mt-5 aspect-square"
            />
          </Link>
        </div>{" "}
        <div className="">
          <Link
            href="#"
            className=" flex relative items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Image
              key={getFirstData.id}
              src={getFirstData.url}
              alt={`Image`}
              width={700}
              height={700}
              className=" w-full aspect-square"
            />
            <Image
              src={getFifthDataReels}
              alt={`Image`}
              width={40}
              height={40}
              className="absolute right-0 top-0 mr-6 mt-5 aspect-square"
            />
          </Link>
        </div>{" "}
        <div className="">
          <Link
            href="#"
            className=" flex relative items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Image
              key={getFifthData.id}
              src={getFifthData.url}
              alt={`Image`}
              width={700}
              height={700}
              className=" w-full aspect-square"
            />
            <Image
              src={getFifthDataReels}
              alt={`Image`}
              width={40}
              height={40}
              className="absolute right-0 top-0 mr-6 mt-5 aspect-square"
            />
          </Link>
        </div>{" "}
        <div className="">
          <Link
            href="#"
            className=" relative flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Image
              key={getSixthData.id}
              src={getSixthData.url}
              alt={`Image`}
              width={700}
              height={700}
              className=" w-full aspect-square"
            />
            <Image
              src={getSixthDataReels}
              alt={`Image`}
              width={40}
              height={40}
              className="absolute right-0 top-0 mr-6 mt-5 aspect-square"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
