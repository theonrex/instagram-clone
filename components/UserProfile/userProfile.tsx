import React from "react";
import Image from "next/image";
import userProfileData from "../../data/userProfileData.json";
import Settings from "./settingsIcon";
export default function UserProfile() {
  return (
    <div className="mt-4 container p-4 mx-auto">
      {userProfileData?.userProfileData.map((profileData, index) => (
        <div>
          <section className="flex justify-end items-center mb-2 Edit_Profile">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-0.5 text-center mr-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Edit Profile
            </button>
            <Settings />
          </section>
          <div className="flex justify-start items-start  user_profile_heading">
            <Image
              src={profileData.url}
              alt={`Image`}
              width={120}
              height={120}
              className="mr-4 rounded-full mr-20"
            />
            <div className="flex justify-start items-start flex-col user_profile_details">
              <section className="flex justify-start items-center direction-row pb-2 profileData_settings profileData_settings_show">
                <h1 className="font-medium text-1xl pr-2">
                  {" "}
                  {profileData.name}
                </h1>

                <div className="flex justify-start items-center direction-row Edit_Profile">
                  <div className="pl-2 ">
                    <div>
                      {/* Dropdown menu */}
                      <div
                        id="dropdownInformation"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                      >
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                          <div>" user.name "</div>
                        </div>
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownInformationButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex justify-start items-baseline direction-row user_followers  pb-3">
                <h2 className="pr-4 font-medium">
                  1,3000 <span className="font-normal">post</span>
                </h2>
                <h2 className="pr-4 font-medium">
                  4M <span className="font-normal">followers</span>
                </h2>
                <h2 className="pr-4 font-medium">
                  1,250 <span className="font-normal">following</span>
                </h2>
              </section>
              <section className=" pb-3 user_full_name">Terry luscas</section>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
