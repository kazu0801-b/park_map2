// app/components/SpotContent.tsx
import React from "react";

interface SpotContentProps {
  title: string;
  description: string;
}

export function SpotContent({ title, description }: SpotContentProps) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: "bold",
          color: "black",
          borderBottom: "2px solid #333",
          paddingBottom: "8px",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: 0,
          fontWeight: "normal",
          lineHeight: "1.6",
          fontSize: "16px",
          color: "#333",
        }}
      >
        {description}
      </p>
    </div>
  );
}
