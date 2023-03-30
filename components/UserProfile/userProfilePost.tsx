import React from "react";
import userData from "../../data/usersData.json"
import Image from "next/image";
export default function UserProfilePost() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          {userData.userData.map((userData) => (
            <Image
              className="h-auto w-full p-2 m-auto rounded-lg"
              src={userData.url}
              alt="userData"
              width={300}
              height={300}
            />
          ))}
        </div>{" "}
        <div>
          {userData.userData.map((userData) => (
            <Image
              className="h-auto w-full  p-2 rounded-lg"
              src={userData.url}
              alt="userData"
              width={300}
              height={300}
            />
          ))}
        </div>
        <div>
          {userData.userData.map((userData) => (
            <Image
              className="h-auto w-full  p-2 rounded-lg"
              src={userData.url}
              alt="userData"
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
