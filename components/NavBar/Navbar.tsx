import React from "react";
import SearchInput from "../searchInput/SearchInput";
import HomeIcon from "../../public/assets/Home.svg";
import MessageIcon from "../../public/assets/Message.svg";
import PostIcon from "../../public/assets/NewPosts.svg";
import GpsIcon from "../../public/assets/Gpss.svg";
import FavoriteIcon from "../../public/assets/FavoriteIcon.svg";
import ProflieIcon from "../../public/assets/ProfileImage.png";
import InstagramLogo from "../../public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Theme from "../Theme/theme";

export default function Navbar() {
  return (
    <nav>
      {" "}
      <div className="nav_bg bg-white-50 mb-6 fixed z-[100] top-0 left-0 right-0 flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={InstagramLogo}
            alt="Instagram Logo "
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm pl-1 py-2.5 text-center mr-1 md:mr-0  sm:w-5/5 instagram_logo darkMode_invert"
            height={30}
          />
        </Link>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order- nav_hide"
          id="navbar-cta"
        >
          <ul className="bg-white-500 flex flex-col p-4 mt-4   md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <SearchInput />
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <Link href="/">
            <Image
              src={HomeIcon}
              alt="home icon"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  nav_hide darkMode_invert"
              height={70}
              width={65}
            />
          </Link>
          <Link href="/messenger">
            <Image
              src={MessageIcon}
              alt="homeMessage Icon"
              className="text-white   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  nav_hide darkMode_invert"
              height={70}
              width={65}
            />
          </Link>
          <Link href="/explore">
            <Image
              src={PostIcon}
              alt="post icon"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  nav_hide darkMode_invert"
              height={70}
              width={65}
            />
          </Link>

          <Link href="/messenger"></Link>

          <Image
            src={GpsIcon}
            alt="gps icon"
            className="text-white   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  nav_hide darkMode_invert"
            height={70}
            width={65}
          />
          <Link href="/messenger"></Link>

          <Image
            src={FavoriteIcon}
            alt="favorite icon"
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  nav_hide darkMode_invert"
            height={40}
            width={65}
          />
          <a href="/my-profile">
            <Image
              src={ProflieIcon}
              alt="home icon"
              className="text-white profile_image  rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 w-full home_icon"
              height={60}
              width={60}
            />
          </a>
          <Theme/>
        </div>
      </div>
    </nav>
  );
}
