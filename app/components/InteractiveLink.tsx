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
    <a href={href} onClick={handleClick} className={`apolast-link ${className}`}>
      <span className="apolast-link-text">{children}</span>
      <span className="apolast-link-hover" aria-hidden="true">
        {hoverText}
      </span>
    </a>
  );
}
