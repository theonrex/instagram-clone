import React from "react";
import SearchInput from "../searchInput/SearchInput";
import HomeIcon from "../../public/assets/Home.svg";
import MessageIcon from "../../public/assets/Message.svg";
import PostIcon from "../../public/assets/NewPosts.svg";
import exploreIcon from "../../public/assets/Gpss.svg";
import FavoriteIcon from "../../public/assets/FavoriteIcon.svg";
import SearchIcon from "../../public/assets/icons/icons8-search-150.png";
import InstagramLogo from "../../public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
export default function BottomNav() {
  return (
    <div>
      <div className="fixed bottom-0 z-50 w-full h-16 -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600 bottom_nav_show">
        <div className="grid h-full max-w-lg grid-cols-6 mx-auto">
          {/* Home */}
          <button
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link href="/">
              <Image src={HomeIcon} alt="HomeIcon" width={20} className="darkMode_invert"/>
            </Link>
            <span className="sr-only">Home</span>
          </button>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow />
          </div>
          {/* Home */}

          {/* message */}
          <button
            data-tooltip-target="tooltip-message"
            type="button"
            className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link href="/messenger">
              <Image src={MessageIcon} alt="HomeIcon" width={20} className="darkMode_invert"/>
            </Link>
            <span className="sr-only">Message </span>
          </button>
          <div
            id="tooltip-message"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Message
            <div className="tooltip-arrow" data-popper-arrow />
          </div>
          {/* massage */}
          {/* post */}
          <button
            data-tooltip-target="tooltip-post"
            type="button"
            className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link href="/">
              <Image src={PostIcon} alt="HomeIcon" width={20} className="darkMode_invert" />
            </Link>
            <span className="sr-only">Post</span>
          </button>
          <div
            id="tooltip-Post"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Post
            <div className="tooltip-arrow" data-popper-arrow />
          </div>
          {/* post */}
          {/* exploreIcon */}

          <button
            data-tooltip-target="tooltip-explore"
            type="button"
            className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link href="/explore">
              <Image src={exploreIcon} alt="HomeIcon" width={20} className="darkMode_invert"/>
            </Link>
            <span className="sr-only">Explore</span>
          </button>
          <div
            id="tooltip-explore"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Explore
            <div className="tooltip-arrow" data-popper-arrow />
          </div>
          {/* exploreIcon */}

          {/* FavoriteIcon */}
          <button
            data-tooltip-target="tooltip-favorite"
            type="button"
            className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link href="/">
              <Image src={FavoriteIcon} alt="HomeIcon" width={20} className="darkMode_invert"/>
            </Link>
            <span className="sr-only">favorite</span>
          </button>

          <div
            id="tooltip-favorite"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Favorite
            <div className="tooltip-arrow" data-popper-arrow />
          </div>
          {/* FavoriteIcon */}

          {/* search icon */}

          <button
            data-tooltip-target="tooltip-search"
            type="button"
            className="inline-flex flex-col items-center justify-center px-2 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <Link href="/">
              <Image src={SearchIcon} alt="HomeIcon" width={20} className="darkMode_invert"/>
            </Link>
            <span className="sr-only">search</span>
          </button>
 
          <div
            id="tooltip-search"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 "
          >
            Search
            <div className="tooltip-arrow" data-popper-arrow />
          </div>
        </div>
      </div>
    </div>
  );
}

