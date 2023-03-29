import React from "react";
import ProfileData from "../../data/usersData.json";
import Image from "next/image";
import Suggestions from "../Home/Suggestions";
import Footer from "../Footer/Footer";
import Status from "../Home/Status";
import InstagramPost from "../Home/InstagramPost";
import ChatBox from "./ChatBox";
import ChatIcon from "../../public/assets/icons/message.png"
import MessageIcon from "../../public/assets/icons/NewMessages.png";
import ArrowIcon from "../../public/assets/icons/arrowdown.png"


export default function Message() {
  const firstImage = ProfileData.userData[0]; // Get the first image from the array

  return (
    <>
      <div className="border-t-2 border-dark-100">
        <div className=" message_body_width  ">
          <div className="h-full px-3 py-4 overflow-y-auto border-r-2 border-dark-100 ">
            <div className="flex items-center justify-between pb-3">
              <section className="flex items-center mr-4 ">
                <Image
                  key={firstImage.id}
                  src={firstImage.url}
                  alt={`Image`}
                  width={40}
                  height={40}
                  className="mr-4 rounded-full"
                />

                <aside className="flex items-center justify-between">
                  <h3 className="font-bold mr-3">{firstImage.name}</h3>
                  <span className="text-sky-700 font-medium ">
                    <Image
                      src={ArrowIcon}
                      alt={`Image`}
                      width={20}
                      height={20}
                      className="pt-1"
                    />
                  </span>
                </aside>
              </section>
              <span className="text-sky-700 font-medium ">
                <Image
                  src={MessageIcon}
                  alt={`Image`}
                  width={30}
                  height={30}
                  className=""
                />
              </span>
            </div>

            <div className="border-t-2 border-dark-100">
              <ChatBox />
            </div>
          </div>
        </div>
        <aside className="chat_box_width  right-0 left_null  fixed top-20   h-full  transition-transform chat_box_hide">
          <div className="h-full flex items-center justify-center  flex-col px-3 py-4 overflow-y-auto ">
            <hr />
            <Image
              src={ChatIcon}
              alt={`Image`}
              width={50}
              height={50}
              className="ml-22 rounded-full "
            />
            <h1 className="text-center font-semibold mb-3">Your Message</h1>

            <p className="mb-6 text-sm dark:text-blue-400 text-center">
              Send privae photos and messages to a friend or group.
            </p>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
