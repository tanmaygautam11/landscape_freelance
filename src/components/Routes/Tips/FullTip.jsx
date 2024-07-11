import React from "react";
import { useLocation } from "react-router-dom";
import "./FullTip.css";

const FullTip = () => {
  const location = useLocation();
  const { title, content, image } = location.state;

  const formatContent = (content) => {
    // Split content into paragraphs based on '\n' for new paragraphs
    const paragraphs = content.split("\n").map((paragraph, index) => {
      // Check for line breaks '<br/>' and replace with <br> tag
      paragraph = paragraph.split("<br/>").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {/* Check for bold text markers '\b...\b' */}
          {line.includes("\b")
            ? line.split("\b").map((part, partIndex) =>
                partIndex % 2 === 0 ? ( // Even index means regular text
                  part
                ) : (
                  // Odd index means bold text
                  <strong key={`bold-${lineIndex}-${partIndex}`}>{part}</strong>
                )
              )
            : // No bold text markers, just render the line
              line}
          {/* Add <br> tag if it's not the last line of the paragraph */}
          {lineIndex < paragraph.split("<br/>").length - 1 && <br />}
        </React.Fragment>
      ));

      // Join lines with <br> tags and wrap in a <p> tag
      return (
        <p key={index} className="full-tip-paragraph">
          {paragraph}
        </p>
      );
    });

    return paragraphs;
  };

  return (
    <div className="full-tip-page">
      <div className="tips-header">
        <img
          src="https://images.pexels.com/photos/17998785/pexels-photo-17998785/free-photo-of-close-up-of-fern.png?auto=compress&cs=tinysrgb"
          alt="Plants"
          className="header-image"
        />
        <div className="overlay"></div>
      </div>
      <div className="full-tip-content">
        <h2 className="tips-company">Baten Construction & Landscaping</h2>
        <h1 className="full-tip-title">{title}</h1>
        <div className="full-tip-body">
          <img src={image} alt={title} className="full-tip-image" />
          <div className="full-tip-text"> {formatContent(content)}</div>
        </div>
      </div>
    </div>
  );
};

export default FullTip;
