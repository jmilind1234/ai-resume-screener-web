"use client";

import { api } from "@/lib/api";
import { useState, useEffect } from "react";

function TypewriterText({ tagline }: { tagline: string }) {
  const [displayText, setDisplayText] = useState(tagline);
  const [currentEndIndex, setCurrentEndIndex] = useState(0);
  const tagLineLength = tagline.length;

  // sets the text to display only when currentEndIndex changes
  useEffect(() => {
    setDisplayText(tagline.slice(0, currentEndIndex));
  }, [currentEndIndex]);

  //just a test
  useEffect(() => {
    api.get("/health").then((res) => console.log(res.data));
  }, []);
  // in every 400 millisecond the currentEndIndex is updating and as it will change the component will re-render and hence we need to take care of cleanup

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEndIndex((prev) => (prev + 1) % (tagLineLength + 1));
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-[50px] w-fit h-fit border-r-2 border-solid border-gray-300">
      {displayText}
    </div>
  );
}

export default TypewriterText;
