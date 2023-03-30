import React from "react";
import UserProfilePost from "./userProfilePost";
import PostIcon from "../../public/assets/icons/ProfilePost.png";
import TagIcon from "../../public/assets/icons/profileTagg.png";
import SavetIcon from "../../public/assets/icons/Save.png";
import Image from "next/image";
export default function UserProfileTab() {
  return (
    <div>
      <div>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex items-baseline justify-center -mb-px text-sm font-medium text-center scrollbar"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="inline-block flex justify-center items-center mr-5 p-4 border-b-2 rounded-t-lg"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <Image
                  src={PostIcon}
                  alt="PostIcon"
                  width={15}
                  className="mr-3"
                />
                <span>Profile</span>
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block flex justify-center items-center mr-5 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="saved-tab"
                data-tabs-target="#saved"
                type="button"
                role="tab"
                aria-controls="saved"
                aria-selected="false"
              >
                <Image
                  src={PostIcon}
                  alt="PostIcon"
                  width={15}
                  className="mr-3"
                />
                Saved
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block flex justify-center items-center mr-5 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="tagged-tab"
                data-tabs-target="#tagged"
                type="button"
                role="tab"
                aria-controls="tagged"
                aria-selected="false"
              >
                <Image
                  src={PostIcon}
                  alt="PostIcon"
                  width={15}
                  className="mr-3"
                />
                <span>Tagged</span>
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <UserProfilePost />
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="saved"
            role="tabpanel"
            aria-labelledby="saved-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
       
              <strong className="font-medium text-gray-800 dark:text-white">
               No Saved Post
              </strong>
            
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="tagged"
            role="tabpanel"
            aria-labelledby="tagged-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
       
              <strong className="font-medium text-gray-800 dark:text-white">
              Not Yet Tagged
              </strong>
          
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
