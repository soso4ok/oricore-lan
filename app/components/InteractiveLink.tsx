"use client";

import React, { useState, useCallback } from "react";

interface InteractiveLinkProps {
  href: string;
  hoverText: string;
  children: React.ReactNode;
  className?: string;
}

export default function InteractiveLink({
  href,
  hoverText,
  children,
  className = "",
}: InteractiveLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`apolast-link ${isHovered ? "is-hovered" : ""} ${className}`}
    >
      <span className="apolast-link-text">{children}</span>
      <span className="apolast-link-hover" aria-hidden="true">
        {hoverText}
      </span>
    </a>
  );
}
