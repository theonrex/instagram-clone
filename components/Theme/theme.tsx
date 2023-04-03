import React from "react";
import { useState, useEffect } from "react";
import { FcNightLandscape, FcLandscape } from "react-icons/fc";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);
  const ActiveMode = async () => {
    setDarkMode(!darkMode);
    if (darkMode !== undefined) {
      if (darkMode === true) {
        document.body.classList.add("lightModeTheme");
        document.body.classList.remove("darkModeTheme");
        await localStorage.setItem("Theme", "lightModeTheme");
      }
      if (darkMode === false) {
        document.body.classList.add("darkModeTheme");
        document.body.classList.remove("lightModeTheme");
        await localStorage.setItem("Theme", "darkModeTheme");
      }
    }
  };

  useEffect(() => {
    if (darkMode !== undefined) {
      if (localStorage.getItem("Theme") === "lightModeTheme") {
        document.body.classList.add("lightModeTheme");
      } else if (localStorage.getItem("Theme") === "darkModeTheme") {
        document.body.classList.add("darkModeTheme");
        setDarkMode(!darkMode);
      }
    }
  }, []);

  return (
    <>
      <div className="darkMode pr-4">
        {darkMode === true ? (
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-7"
            onClick={ActiveMode}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            ></path>
          </svg>
        ) : (
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-7"
            onClick={ActiveMode}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            ></path>
          </svg>
        )}
      </div>
    </>
  );
}
