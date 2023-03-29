import React from "react";
import messageData from "../../data/usersData.json";
import Image from "next/image";
export default function ChatBox() {
  return (
    <div>
      <header className="flex justify-between text-gray-500 font-semibold pb-4"></header>{" "}
      <ul className="space-y-2 font-medium">
        {messageData.userData.map((messageData) => (
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Image
                key={messageData.id}
                src={messageData.url}
                alt={`Image`}
                width={400}
                height={400}
                className="rounded-full  flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />

              <h2 className="flex-1 ml-3 whitespace-nowrap">
                {messageData.name}
                <br />
                <span className="text-xs text-gray-500">
                  {" "}
                  {messageData.message}
                </span>
              </h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
