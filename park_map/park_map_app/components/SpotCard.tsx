// components/SpotCard.tsx
import React from "react";
import { SpotImage } from "./SpotImage";
import { SpotContent } from "./SpotContent";

interface SpotCardProps {
  label: string;
  imageSrc?: string;
}

export const SpotCard = React.forwardRef<HTMLDivElement, SpotCardProps>(
  ({ label, imageSrc }, ref) => {
    const title = label.replace(/🔽/, "");
    const description = `ここに「${label
      .replace(/^[^区市町村]+/, "")
      .replace(
        /🔽/,
        ""
      )}」の詳細説明を追加できます。施設の特徴や利用方法、アクセス情報などを記載することができます。`;

    return (
      <div
        ref={ref}
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "white",
          borderRadius: "16px",
          color: "black",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "flex-start",
          border: "1px solid #e0e0e0",
        }}
      >
        <SpotImage src={imageSrc} alt={title} />
        <SpotContent title={title} description={description} />
      </div>
    );
  }
);

SpotCard.displayName = "SpotCard";
