import React from "react";
import ProfileData from "../../data/usersData.json";
import Image from "next/image";
import Suggestions from "./Suggestions";
import Footer from "../Footer/Footer";
import Status from "./Status";
import InstagramPost from "./InstagramPost";
export default function SideBar() {
  const firstImage = ProfileData.userData[0]; // Get the first image from the array

  return (
    <>
      <div className="">
        <div className="p-4  home_body_width  ">
          <div className="p-4 mt-9 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <InstagramPost />
          </div>{" "}
        </div>
        <aside className="side_bar_width right-0 left_null  fixed top-20   h-screen transition-transform ">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-between ">
              <section className="flex items-center mr-4">
                <Image
                  key={firstImage.id}
                  src={firstImage.url}
                  alt={`Image ${firstImage.id}`}
                  width={40}
                  height={40}
                  className="mr-4 rounded-full"
                />
                <aside>
                  <h3 className="font-bold">{firstImage.name}</h3>
                  <h5>{firstImage.name}</h5>
                </aside>
              </section>
              <span className="text-sky-700 font-medium "> Switch</span>
            </div>
            <hr />
            <div>
              <Suggestions />
            </div>
            <div
              id="dropdown-cta"
              className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
              role="alert"
            >
              <div className="flex items-center mb-3">
                <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                  Beta
                </span>
                <button
                  type="button"
                  className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                  data-dismiss-target="#dropdown-cta"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                Preview the new Flowbite dashboard navigation! You can turn the
                new navigation off for a limited time in your profile.
              </p>
              <a
                className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                href="#"
              >
                Turn new navigation off
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
