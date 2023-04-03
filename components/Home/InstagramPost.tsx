import React from "react";
import Image from "next/image";
import PostData from "../../data/usersData.json";
import Link from "next/link";
import DropDownMenu from "../Dropdown/dropDownMenu";
import EmojiIcon from "../../public/assets/icons/Emoji.png";
import ReadMore from "@/utils/readMore";
export default function InstagramPost() {
  return (
    <>
      {PostData?.userData.map((post, index) => (
        <div className=" border border-gray-900 mb-8" key={index}>
          <div className="flex items-center justify-between mt-2 mb-3 mt-6 mr-4 ml-4 ">
            <ul className="flex items-center">
              <a
                href={`/profile/${post.id}`}
                className=" flex items-center post_profile_picture"
              >
                <Image
                  key={post.id}
                  src={post.url}
                  alt={`Image ${post.id}`}
                  width={30}
                  height={30}
                  className="mr-3 rounded-full  "
                  loading="lazy"
                />
                <h4 className="font-semibold">{post.name}</h4>
              </a>
            </ul>

            <ul>
              <li>
                <DropDownMenu />
              </li>
            </ul>
          </div>
          <Image
            key={post.id}
            src={post.url}
            alt={`Image ${post.id}`}
            width={440}
            height={490}
            className="mr-4 w-full "
            loading="lazy"
            quality="70"
          />
          {/* Like, comment, share, save icons */}
          <div className="flex justify-between justify-between mt-2 mb-3 post_icons">
            <ul className="flex ">
              <li className="pl-3 ">
                <img src="https://img.icons8.com/ios-glyphs/32/null/hearts.png" />
              </li>
              <li className="pl-3">
                <img src="https://img.icons8.com/fluency-systems-regular/32/000000/speech-bubble--v1.png" />
              </li>
              <li className="pl-3">
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/32/null/external-send-instagram-flatart-icons-outline-flatarticons.png" />
              </li>
            </ul>
            <ul>
              <li>
                <img src="https://img.icons8.com/windows/32/000000/filled-bookmark-ribbon.png" />
              </li>
            </ul>
          </div>

          <article className="pl-3">
            {/*Number of post Likes */}

            <h1 className="font-bold"> {post.likes.toLocaleString()} likes</h1>
            <div className="font-bold flex items-baseline post_body_details">
              {post.name}
              <span className="pl-2 font-normal flex text-sm">
                <ReadMore content={post.postContent} maxChars={40} />
              </span>
            </div>
            <p className="text-stone-700 pt-1 pb-1">View all 100 comments</p>
            <p className="text-stone-700 pt-1 pb-1">1 hour ago</p>
          </article>
          <section className="flex  justify-between  items-center bg-transparent-50 border border-transparent-900 ">
            <div className=" ">
              <div className="flex inset-y-0 left-0 flex items-center pl-3">
                <Image src={EmojiIcon} alt="EmojiIcon" width={20} />
                <input
                  type="text"
                  id="simple-search"
                  className=" flex  border border-gray-00 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full pl-10 p-2.5  dark:bg-transparent dark:transparent dark:placeholder-transparent dark:text-white dark:focus:ring-transparent dark:focus:border-transparent"
                  placeholder="Add a comment"
                  required
                />
              </div>
            </div>
            <p className="p-2.5 ml-2 text-sm font-medium text-blue-800   ">
              Post
            </p>
          </section>
        </div>
      ))}
    </>
  );
}
