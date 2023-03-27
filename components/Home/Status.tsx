import React from "react";
import StatusData from "../../data/usersData.json";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function Status() {
  return (
    <div className={styles.image_gallery}>
      {StatusData.userData.map((image) => (
        <div className=" rounded-full">
          <Image
            key={image.id}
            src={image.url}
            alt={`Image ${image.id}`}
            width={110}
            height={110}
          />
        </div>
      ))}
    </div>
  );
}
