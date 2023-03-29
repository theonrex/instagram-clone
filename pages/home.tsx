// import React, { useState } from "react";
// import profileData from "../../data/usersData.json";
// import profilePostData from "../../data/profilePostData.json";
// import Image from "next/image";
// import Tabs from "@/components/PostTabs/Tabs";
// import postIcon from "../../public/assets/icons/postIcon.png";
// import guildIcon from "../../public/assets/icons/Guides.png";
// import reelsIcon from "../../public/assets/icons/Reels.png";
// import videosIcon from "../../public/assets/icons/Videos.png";
// import taggedIcon from "../../public/assets/icons/tagged.png";

// interface Props {
//   profileData: {
//     id: number;
//     username: string;
//     profilePicUrl: string;
//     posts: {
//       id: number;
//       imageUrl: string;
//       caption: string;
//     }[];
//   };
// }
// export default function profileId({ user, userPost }) {
//   const [posts, setPosts] = useState(userPost.posts);

//   // const [postData, setPostData] = useState([])
//   console.log(userPost.posts);

//   // const fetchPostData = async () => {
//   //   try {
//   //     const res

//   //   } catch (error) {

//   //   }
//   // }

//   if (!user) {
//     return <div className="mt-20">User not found</div>;
//   }
//   return (
//     <div className="mt-40 container mx-auto">
//       <div className="flex justify-start items-center mb-16">
//         <Image
//           key={user.id}
//           src={user.url}
//           alt={`Image`}
//           width={120}
//           height={120}
//           className="mr-4 rounded-full mr-20"
//         />
//         <div className="flex justify-start items-start flex-col ">
//           <section className="flex justify-start items-baseline direction-row pb-3 ">
//             <h1 className="font-medium text-2xl pr-5"> {user.name} </h1>
//             <button
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//             >
//               Follow
//             </button>

//             <div className="pl-5">
//               <div>
//                 <button
//                   id="dropdownInformationButton"
//                   data-dropdown-toggle="dropdownInformation"
//                   className="text-dark hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   type="button"
//                 >
//                   <svg
//                     className="w-4 h-4 ml-2"
//                     aria-hidden="true"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 {/* Dropdown menu */}
//                 <div
//                   id="dropdownInformation"
//                   className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//                 >
//                   <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
//                     <div> {user.name}</div>
//                     <div className="font-medium truncate">
//                       name@flowbite.com
//                     </div>
//                   </div>
//                   <ul
//                     className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                     aria-labelledby="dropdownInformationButton"
//                   >
//                     <li>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dashboard
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Settings
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Earnings
//                       </a>
//                     </li>
//                   </ul>
//                   <div className="py-2">
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Sign out
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className="flex justify-start items-baseline direction-row  pb-3">
//             <h2 className="pr-4 font-medium">
//               1,3000 <span className="font-normal">post</span>
//             </h2>
//             <h2 className="pr-4 font-medium">
//               4M <span className="font-normal">followers</span>
//             </h2>
//             <h2 className="pr-4 font-medium">
//               1,250 <span className="font-normal">following</span>
//             </h2>
//           </section>
//           <section className=" pb-3">Terry luscas</section>
//         </div>
//       </div>
//       <div>
//         <section className="flex">
//           <div>
//             <Image
//               key={user.id}
//               src={user.url}
//               alt={`Image`}
//               width={40}
//               height={40}
//               className="mr-4 rounded-full"
//             />
//             <p> Made Us</p>{" "}
//           </div>
//         </section>
//         <div>
//           <div className="mb-4 mt-6 border-b border-gray-200 dark:border-gray-700">
//             <ul
//               className="flex flex-wrap -mb-px text-sm font-medium text-center"
//               id="myTab"
//               data-tabs-toggle="#myTabContent"
//               role="tablist"
//             >
//               <li className="mr-2 flex items-center pr-5  " role="presentation">
//                 <Image src={postIcon} alt="posticons" width={10} height={10} />
//                 <button
//                   className="inline-block pl-2  border-b-2 rounded-t-lg"
//                   id="UserPost-tab"
//                   data-tabs-target="#UserPost"
//                   type="button"
//                   role="tab"
//                   aria-controls="UserPost"
//                   aria-selected="false"
//                 >
//                   Post
//                 </button>
//               </li>
//               <li className="mr-2 flex items-center " role="presentation">
//                 <Image src={guildIcon} alt="guildIcon" width={10} height={10} />

//                 <button
//                   className="inline-block p-4 pl-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
//                   id="guides-tab"
//                   data-tabs-target="#guides"
//                   type="button"
//                   role="tab"
//                   aria-controls="guides"
//                   aria-selected="false"
//                 >
//                   Guides
//                 </button>
//               </li>
//               <li className="mr-2 flex items-center " role="presentation">
//                 <Image
//                   src={reelsIcon}
//                   alt="reelsIcons"
//                   width={10}
//                   height={10}
//                 />

//                 <button
//                   className="inline-block p-4 pl-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
//                   id="reels-tab"
//                   data-tabs-target="#reels"
//                   type="button"
//                   role="tab"
//                   aria-controls="reels"
//                   aria-selected="false"
//                 >
//                   Reels
//                 </button>
//               </li>
//               <li className="mr-2 flex items-center " role="presentation">
//                 <Image
//                   src={videosIcon}
//                   alt="videosIcons"
//                   width={10}
//                   height={10}
//                 />

//                 <button
//                   className="inline-block p-4 pl-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
//                   id="videos-tab"
//                   data-tabs-target="#videos"
//                   type="button"
//                   role="tab"
//                   aria-controls="videos"
//                   aria-selected="false"
//                 >
//                   Videos
//                 </button>
//               </li>
//               <li className="mr-2 flex items-center " role="presentation">
//                 <Image
//                   src={taggedIcon}
//                   alt="taggedIcons"
//                   width={10}
//                   height={10}
//                 />

//                 <button
//                   className="inline-block p-4 pl-2  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
//                   id="tagged-tab"
//                   data-tabs-target="#tagged"
//                   type="button"
//                   role="tab"
//                   aria-controls="tagged"
//                   aria-selected="false"
//                 >
//                   Tagged
//                 </button>
//               </li>
//             </ul>
//           </div>
//           <div className="">
//             <div id="myTabContent">
//               <div
//                 className="hidden columns-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
//                 id="UserPost"
//                 role="tabpanel"
//               >
//                 {posts.map((post, index) => (
//                   <div key={index} className="">
//                     <Image
//                       src={post?.imageUrl}
//                       alt={`Image`}
//                       width={420}
//                       height={420}
//                       className="mr-4  mr-20 columns-3 "
//                     />
//                     <h1>{post?.caption}</h1>
//                   </div>
//                 ))}
//               </div>
//               <div
//                 className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
//                 id="guides"
//                 role="tabpanel"
//                 aria-labelledby="guides-tab"
//               >
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   This is some placeholder content the{" "}
//                   <strong className="font-medium text-gray-800 dark:text-white">
//                     guides tab's associated content
//                   </strong>
//                   . Clicking another tab will toggle the visibility of this one
//                   for the next. The tab JavaScript swaps classes to control the
//                   content visibility and styling.
//                 </p>
//               </div>
//               <div
//                 className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
//                 id="reels"
//                 role="tabpanel"
//                 aria-labelledby="reels-tab"
//               >
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   This is some placeholder content the{" "}
//                   <strong className="font-medium text-gray-800 dark:text-white">
//                     reels tab's associated content
//                   </strong>
//                   . Clicking another tab will toggle the visibility of this one
//                   for the next. The tab JavaScript swaps classes to control the
//                   content visibility and styling.
//                 </p>
//               </div>
//               <div
//                 className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
//                 id="videos"
//                 role="tabpanel"
//                 aria-labelledby="videos-tab"
//               >
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   This is some placeholder content the{" "}
//                   <strong className="font-medium text-gray-800 dark:text-white">
//                     videos tab's associated content
//                   </strong>
//                   . Clicking another tab will toggle the visibility of this one
//                   for the next. The tab JavaScript swaps classes to control the
//                   content visibility and styling.
//                 </p>
//               </div>{" "}
//               <div
//                 className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
//                 id="tagged"
//                 role="tabpanel"
//                 aria-labelledby="tagged-tab"
//               >
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   This is some placeholder content the{" "}
//                   <strong className="font-medium text-gray-800 dark:text-white">
//                     tagged tab's associated content
//                   </strong>
//                   . Clicking another tab will toggle the visibility of this one
//                   for the next. The tab JavaScript swaps classes to control the
//                   content visibility and styling.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const paths = profileData?.userData.map((user) => ({
//     params: { id: user.id.toString() },
//   }));

//   const post = profilePostData?.profilePostData.map((user) => ({
//     params: { id: user.id.toString() },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const user = profileData.userData.find(
//     (user) => user.id.toString() === params.id.toString()
//   );

//   const userPost = profilePostData.profilePostData.find(
//     (user) => user.id.toString() === params.id.toString()
//   );

//   if (!user || !userPost) {
//     return {
//       notFound: true,
//       // or add a custom 404 page by replacing `notFound: true` with:
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return { props: { user, userPost } };
// }

// //profilePostData
