import React from "react";
import Image from "next/image";
import userProfileData from "../../data/userProfileData.json";
import SettingsIcon from "../../public/assets/icons/Settings.png";
export default function UserProfile() {
  return (
    <div className="mt-4">
      {userProfileData?.userProfileData.map((profileData, index) => (
        <div className="flex justify-start items-center mb-16 user_profile_heading">
          <Image
            src={profileData.url}
            alt={`Image`}
            width={120}
            height={120}
            className="mr-16 rounded-full mr-20"
          />
          <div className="flex justify-start items-start flex-col user_profile_details">
            <section className="flex justify-start items-baseline direction-row pb-3 profileData_settings">
              <h1 className="font-normal text-xl pr-5"> {profileData.name}</h1>

              <button
                type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Edit Profile
              </button>

              <div className="pl-5 flex justify-start items-baseline ">
                <div>
                  <Image
                    id="dropdownInformationButton"
                    data-dropdown-toggle="dropdownInformation"
                    src={SettingsIcon}
                    alt="SettingsIcon"
                    width={20}
                  />
                  {/* Dropdown menu */}
                  <div
                    id="dropdownInformation"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      <div>" user.name "</div>
                      <div className="font-medium truncate">
                        name@flowbite.com
                      </div>
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
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-2">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex justify-start items-baseline direction-row  pb-3">
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
            <section className=" pb-3">Terry luscas</section>
          </div>
        </div>
      ))}
    </div>
  );
}
