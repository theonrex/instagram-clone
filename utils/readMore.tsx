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
    <div className="flex items-center flex-col">
      <p>
        {isExpanded ? content : truncatedContent + "..."}

        <span>
          {shouldShowButton && (
            <button
              className="font-bold text-slate-400 fex items-center flex-col"
              onClick={toggleExpand}
            >
              {isExpanded ? "read less" : "read more"}
            </button>
          )}
        </span>
      </p>
    </div>
  );
}

export default ReadMore;
