import React from "react";
import SuggestionsData from "../../data/usersData.json";
import Image from "next/image";

export default function Suggestions() {
  return (
    <div>
      <header className="flex justify-between text-gray-500 font-semibold pb-4 ">
        Suggestions For You <span className="text-gray-800">See All</span>
      </header>{" "}
      <ul className="space-y-2 font-medium">
        {SuggestionsData.userData.map((suggestedData, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Image
                key={suggestedData.id}
                src={suggestedData.url}
                alt={`Image ${suggestedData.id}`}
                width={400}
                height={400}
                className="rounded-full  flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />

              <h2 className="flex-1 ml-3 whitespace-nowrap hover:text-gray-900">
                Kanban
                <br />
                <span className="text-xs text-gray-500">
                  {" "}
                  {suggestedData.followed}{" "}
                </span>
              </h2>
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-blue-800 text-blue-700">
                Follow
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
