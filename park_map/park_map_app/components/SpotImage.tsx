// app/components/SpotImage.tsx
import React from "react";

interface SpotImageProps {
  src?: string;
  alt?: string;
}

export function SpotImage({ src, alt }: SpotImageProps) {
  const imageStyle = {
    width: "200px",
    height: "150px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    color: "#666",
    border: "1px solid #ddd",
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt || "スポット画像"}
        style={{
          ...imageStyle,
          objectFit: "cover" as const,
          backgroundColor: "transparent",
        }}
      />
    );
  }

  return <div style={imageStyle}>画像エリア</div>;
}
