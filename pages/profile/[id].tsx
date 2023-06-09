import React, { useState } from "react";
import profileData from "../../data/usersData.json";
import profilePostData from "../../data/profilePostData.json";
import Image from "next/image";
import Tabs from "@/components/PostTabs/Tabs";
import MoreIcon from "../../public/assets/icons/More.png";


interface User {
  id: string;
  name: string;
  url: string;
  followed: string;
  reels: string;
  likes: number;
  message: string;
  postContent: string;
}

interface Post {
  id: string;
  username: string;
  profilePicUrl: string;
  posts: [
    {
      id: string;
      imageUrl: string;
      caption: string;
      reels: string;
    }
  ];
}
interface Props {
  user: User;
  userPost: Post;
}

interface Params {
  id: string;
}
export default function profileId({ user, userPost }: Props) {
   const [posts, setPosts] = useState(userPost.posts);

   if (!user) {
     return <div className="mt-14 ">User not found</div>;
   }
  return (
    <div className="mt-10 container p-4 mx-auto">
      <div className="mb-9">
        <section className="flex justify-end items-center mb-2 Edit_Profile">
          <button
            type="button"
            className="
text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800            
            "
          >
            Follow
          </button>
          <button
            id="dropdownInformationButton"
            data-dropdown-toggle="dropdownInformation"
            className="text-dark  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:bg-transparent-600 dark:hover:bg-transparent-700 dark:focus:ring-transparent-800"
            type="button"
          >
            <Image
              src={MoreIcon}
              alt={`Image`}
              width={20}
              height={20}
              className="mr-4 rounded-full mr-20"
            />
          </button>
        </section>
        <div className="flex justify-start items-start   user_profile_heading">
          {/* profile image */}
          <Image
            key={user.id}
            src={user.url}
            alt={`Image`}
            width={120}
            height={120}
            className="mr-4 rounded-full mr-20 "
          />
          {/* username */}
          <div className="flex justify-start items-start flex-col user_profile_details">
            {/* This section would display form 430px */}
            <section className="flex justify-start items-center direction-row pb-2 profileData_settings profileData_settings_show">
              <h1 className="font-medium pl-2 pr-2"> {user.name} </h1>

              <div className="flex justify-start items-center direction-row Edit_Profile">
                <div className="pl-2">
                  <div>
                    {/* Dropdown menu */}
                    <div
                      id="dropdownInformation"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <div className="px-4 pl-2  gray-900 dark:text-white">
                        <div> {user.name}</div>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* number of followers - posts  */}
            <section className="flex justify-start items-baseline direction-row user_followers  pb-2">
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
            <section className=" pb-3 font-medium pl-2 pr-2 user_full_name">
              Terry Luscas
            </section>
          </div>
        </div>
      </div>
      <div>
        <section className="flex pt-6  flex-row user_hightlight">
          {posts &&
            posts.slice(0, 4).map((post, index) => (
              <div
                className="pr-5 flex flex-col items-center justify-center "
                key={index}
              >
                <Image
                  src={post.imageUrl}
                  alt={`Image`}
                  width={40}
                  height={40}
                  className=" rounded-full "
                />
                <p className="text-sm text-center">memories </p>{" "}
              </div>
            ))}
        </section>
        {/*  */}

        {/*  */}
        <div>
          <Tabs />
          <div id="myTabContent">
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 columns-2 sm:columns-3 profile_post_section"
              id="userPost"
              role="tabpanel"
              aria-labelledby="userPost-tab"
            >
              {posts &&
                posts.map((post, index) => (
                  <div key={index} className="relative mb-4 ">
                    <Image
                      src={post?.imageUrl}
                      alt={`Image`}
                      width={420}
                      height={420}
                      className="mr-4  mr-20  main_profile_post"
                    />
                    {post.reels ? (
                      <Image
                        src={post?.reels}
                        alt={`Image`}
                        width={20}
                        height={20}
                        className="mr-4  mt-5 mr-20 absolute top-0 right-0 main_profile_icon"
                      />
                    ) : null}
                  </div>
                ))}
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="guides"
              role="tabpanel"
              aria-labelledby="guides-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Guides Feature Not Available
                <br />
                <strong className="font-medium text-gray-800 dark:text-white">
                  We will update you once its available.
                </strong>
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="reels"
              role="tabpanel"
              aria-labelledby="reels-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Reels Feature Not Available
                <br />
                <strong className="font-medium text-gray-800 dark:text-white">
                  We will update you once its available.
                </strong>
              </p>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="videos"
              role="tabpanel"
              aria-labelledby="videos-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Videos Feature Not Available
                <br />
                <strong className="font-medium text-gray-800 dark:text-white">
                  We will update you once its available.
                </strong>
              </p>
            </div>{" "}
            <div
              className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="tagged"
              role="tabpanel"
              aria-labelledby="tagged-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You have not been tagged on an post
                <br />
                <strong className="font-medium text-gray-800 dark:text-white">
                  We will update you once its available.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export async function getStaticPaths() {
  const userDataPaths = profileData?.userData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  const postPaths = profilePostData?.profilePostData.map((post) => ({
    params: { id: post.id.toString() },
  }));

  const paths = [...userDataPaths, ...postPaths];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: Params }) {
  const user = profileData.userData.find(
    (user) => user.id.toString() === params.id.toString()
  );

  const userPost = profilePostData.profilePostData.find(
    (user) => user.id.toString() === params.id.toString()
  );

  if (!user || !userPost) {
    return {
      notFound: true,
    };
  }

  return { props: { user, userPost } };
}