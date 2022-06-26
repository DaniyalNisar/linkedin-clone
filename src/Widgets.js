import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("The Dark Lord is Back!!!", "Top news - 9999 readers")}
      {newsArticle(
        "DumbleDore: DAFT OR DANGERORUS",
        "Top news - 999999 readers"
      )}
      {newsArticle("Hogwarts Attacked!", "Top news - 9999999 readers")}
      {newsArticle(
        "Ministry of Magic Elections 2022",
        "Top news - 999999 readers"
      )}
    </div>
  );
}

export default Widgets;
