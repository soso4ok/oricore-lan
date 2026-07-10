"use client";

import React from "react";

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
    <a href={href} onClick={handleClick} className={`oricore-link ${className}`}>
      <span className="oricore-link-text">{children}</span>
      <span className="oricore-link-hover" aria-hidden="true">
        {hoverText}
      </span>
    </a>
  );
}
