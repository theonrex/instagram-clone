import React from 'react'
import SettingsIcon from "../../public/assets/icons/Settings.png";
import Image from "next/image";

export default function Settings() {
  return (
    <div
      id="dropdownInformationButton"
      data-dropdown-toggle="dropdownInformation"
      className="text-dark  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:bg-transparent-600 dark:hover:bg-transparent-700 dark:focus:ring-transparent-800"
    >
      {" "}
      <Image
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        src={SettingsIcon}
        alt="SettingsIcon"
        width={20}
        className="mr-4 rounded-full mr-20 SettingsIcon darkMode_invert"
      />
    </div>
  );
}
