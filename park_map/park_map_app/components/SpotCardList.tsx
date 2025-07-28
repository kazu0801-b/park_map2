// components/SpotCardList.tsx
import React from "react";
import { SpotCard } from "./SpotCard";

interface SpotCardListProps {
  labels: string[];
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  images?: string[];
}

export function SpotCardList({ labels, refs, images }: SpotCardListProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      {labels.map((label, index) => (
        <SpotCard
          key={index}
          ref={(el: HTMLDivElement | null) => {
            refs.current[index] = el;
          }}
          label={label}
          imageSrc={images?.[index]}
        />
      ))}
    </div>
  );
}
