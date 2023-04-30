import React from "react";
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();
  return (
    <div className={`menu-item ${size}`} onClick={() => navigate(linkUrl)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>

      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
}
