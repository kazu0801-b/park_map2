import { ScrollButton } from "./ScrollButton";

interface ButtonGridProps {
  labels: string[];
  selectedIndex: number | null;
  onButtonClick: (index: number) => void;
}

export function ButtonGrid({
  labels,
  selectedIndex,
  onButtonClick,
}: ButtonGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        justifyItems: "center",
      }}
    >
      {labels.map((label, index) => (
        <ScrollButton
          key={index}
          label={label}
          index={index}
          isSelected={index === selectedIndex}
          onClick={onButtonClick}
        />
      ))}
    </div>
  );
}
