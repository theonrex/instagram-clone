import React from "react";
import postIcon from "../../public/assets/icons/postIcon.png";
import guildIcon from "../../public/assets/icons/Guides.png";
import reelsIcon from "../../public/assets/icons/Reels.png";
import videosIcon from "../../public/assets/icons/Videos.png";
import taggedIcon from "../../public/assets/icons/tagged.png";
import Image from "next/image";

export default function Tabs() {
  return (
    <div>
      <div className="mb-4 mt-6 border-b border-gray-200 dark:border-gray-700 ">
        <ul
          className="flex -mb-px text-sm font-medium text-center profile_tab"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2 flex items-center pr-5  " role="presentation">
            <Image src={postIcon} alt="posticons" width={10} height={10} />
            <button
              className="inline-block pl-2  border-b-2 rounded-t-lg"
              id="userPost-tab"
              data-tabs-target="#userPost"
              type="button"
              role="tab"
              aria-controls="userPost"
              aria-selected="false"
            >
              Post
            </button>
          </li>
          <li className="mr-2 flex items-center " role="presentation">
            <Image src={guildIcon} alt="guildIcon" width={10} height={10} />

            <button
              className="inline-block p-4 pl-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="guides-tab"
              data-tabs-target="#guides"
              type="button"
              role="tab"
              aria-controls="guides"
              aria-selected="false"
            >
              Guides
            </button>
          </li>
          <li className="mr-2 flex items-center " role="presentation">
            <Image src={reelsIcon} alt="reelsIcons" width={10} height={10} />

            <button
              className="inline-block p-4 pl-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="reels-tab"
              data-tabs-target="#reels"
              type="button"
              role="tab"
              aria-controls="reels"
              aria-selected="false"
            >
              Reels
            </button>
          </li>
          <li className="mr-2 flex items-center " role="presentation">
            <Image src={videosIcon} alt="videosIcons" width={10} height={10} />

            <button
              className="inline-block p-4 pl-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="videos-tab"
              data-tabs-target="#videos"
              type="button"
              role="tab"
              aria-controls="videos"
              aria-selected="false"
            >
              Videos
            </button>
          </li>
          <li className="mr-2 flex items-center " role="presentation">
            <Image src={taggedIcon} alt="taggedIcons" width={10} height={10} />

            <button
              className="inline-block p-4 pl-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="tagged-tab"
              data-tabs-target="#tagged"
              type="button"
              role="tab"
              aria-controls="tagged"
              aria-selected="false"
            >
              Tagged
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
