import { useState } from "react";

interface Props {
  content: string;
  maxChars?: number;
}

function ReadMore({ content, maxChars = 30 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  const truncatedContent = content.slice(0, maxChars);
  const shouldShowButton = truncatedContent !== content;

  return (
    <div className="flex items-center">
      <p>{isExpanded ? content : truncatedContent + "..."}</p>
      {shouldShowButton && (
        <button className="font-normal text-slate-400" onClick={toggleExpand}>
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default ReadMore;
