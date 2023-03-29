import React from "react";
import ProfileData from "../../data/usersData.json";
import Image from "next/image";
import Suggestions from "./Suggestions";
import InstagramPost from "./InstagramPost";
export default function SideBar() {
  const firstImage = ProfileData.userData[0]; // Get the first image from the array

  return (
    <>
      <div className="">
        <div className="p-4  home_body_width  ">
          <div className="p-4 mt-9  rounded-lg ">
            <InstagramPost />
          </div>{" "}
        </div>
        <aside className="side_bar_width right-0 left_null  fixed top-20   h-screen transition-transform side_bar_hide">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-between ">
              <section className="flex items-center mr-4">
                <Image
                  key={firstImage.id}
                  src={firstImage.url}
                  alt={`Image`}
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
          </div>
        </aside>
      </div>
    </>
  );
}
