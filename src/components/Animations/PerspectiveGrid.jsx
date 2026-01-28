import React from "react";

function PerspectiveGrid({
  size = 64,
  opacity = 0.10,
  className = "",
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage:
          "radial-gradient(circle at center, black 65%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 55%, transparent 100%)",
      }}
    />
  );
}

export default PerspectiveGrid;
