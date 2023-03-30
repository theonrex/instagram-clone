import React from "react";
import GoogleIcon from "../../public/assets/icons/GooglePlay.png";
import AppleIcon from "../../public/assets/icons/GooglePlay.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center flex-col">
          <header className="self-center text-2xl font-semibold  dark:text-white">
            Start capturing and sharing your moments
          </header>
          <p>Get your app to share your first photos or video.</p>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center flex-grid">
          <Image
            src={AppleIcon}
            alt={`AppleIcon`}
            width={100}
            height={100}
            className="mr-2"
          />
          <Image
            src={AppleIcon}
            alt={`AppleIcon`}
            width={100}
            height={100}
            className=""
          />
        </div>
      </div>
    </footer>
  );
}
