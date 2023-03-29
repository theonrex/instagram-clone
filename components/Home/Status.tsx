import React from "react";
import StatusData from "../../data/usersData.json";
import StoryData from "../../data/storyData.json"
import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function Status() {
  return (
    <div className={styles.image_gallery}>
      {StoryData.storyrData.map((story, index) => (
        <div className="flex" key={index}>
          <Image
            key={story.id}
            src={story.url}
            alt={`Image`}
            width={100}
            height={100}
            className=""
          />
          <h5 className="text-center">{story.name}</h5>
        </div>
      ))}


    </div>
  );
}
