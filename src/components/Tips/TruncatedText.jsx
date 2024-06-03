import { useEffect, useRef } from 'react';

function TruncatedText({ text, maxLength }) {

    function useTruncateTextAtWordBoundary(text, maxLength) {
        const textRef = useRef(null);
      
        useEffect(() => {
          const truncatedText = truncateTextAtWordBoundary(text, maxLength);
          textRef.current.textContent = truncatedText;
      
          const textWidth = textRef.current.offsetWidth;
          if (textWidth > maxLength) {
            textRef.current.style.width = `${maxLength}px`;
          }
        }, [text, maxLength]);
      
        return textRef;
      }
      
      function truncateTextAtWordBoundary(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        }
      
        const lastSpaceIndex = text.lastIndexOf(" ", maxLength - 4); // Adjust for "..."
      
        if (lastSpaceIndex !== -1) {
          return text.substring(0, lastSpaceIndex) + "...";
        } else {
          return text.substring(0, maxLength - 3) + "...";
        }
      }
      

  const textRef = useTruncateTextAtWordBoundary(text, maxLength);
  console.log('text', textRef)
  return (
    <p className="dynamic-truncated-text" ref={textRef}>
      {text}
    </p>
  );
}

export default TruncatedText;
