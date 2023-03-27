import React from "react";
import Image from "next/image";
import PostData from "../../data/usersData.json";

export default function InstagramPost() {
  return (
    <>
      {PostData?.userData.map((post) => (
        <div className="bg-gray-50 border border-gray-300 mb-8">
          <section className="flex items-center justify-start post_profile_picture">
            <Image
              key={post.id}
              src={post.url}
              alt={`Image ${post.id}`}
              width={40}
              height={40}
              className="mr-4 rounded-full"
              loading="lazy"
            />
            <span className="font-semibold">Rexo</span>
            <hr />
            {/* Full Image */}
          </section>
          <Image
            key={post.id}
            src={post.url}
            alt={`Image ${post.id}`}
            width={190}
            height={190}
            className="mr-4 w-full"
            loading="lazy"
          />
          {/* Like, comment, share, save icons */}
          <div className="flex justify-between mt-2 mb-3 ">
            <ul className="flex ">
              <li className="pl-3">
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

            <h1 className="font-bold">1,000 likes</h1>
            <p className="font-bold ">
              terrry{" "}
              <span className="pl-2 font-normal">
                lorcjjjjjjjjjjjjjj{" "}
                <span className="font-normal text-slate-400">.... more</span>
              </span>
            </p>
            <p className="text-stone-700 pt-1 pb-1">View all 100 comments</p>
            <p className="text-stone-700 pt-1 pb-1">1 hour ago</p>
          </article>
          <section className="flex bg-transparent-50 border border-transparent-300 ">
            <div className=" ">
              <div className="flex inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="https://img.icons8.com/windows/32/000000/filled-bookmark-ribbon.png" />
              </div>
              <input
                type="text"
                id="simple-search"
                className=" flex  border-transparent text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-transparent block w-full pl-10 p-2.5  dark:bg-transparent dark:transparent dark:placeholder-transparent dark:text-white dark:focus:ring-transparent dark:focus:border-transparent"
                placeholder="Add a comment"
                required
              />
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
