interface ScrollButtonProps {
  label: string;
  index: number;
  isSelected: boolean;
  onClick: (index: number) => void;
}

export function ScrollButton({
  label,
  index,
  isSelected,
  onClick,
}: ScrollButtonProps) {
  const isSmall = index === 10;

  const boxStyleBase = {
    width: "240px",
    height: "50px",
    border: "2px solid gray",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "bold",
    textAlign: "center" as const,
    whiteSpace: "nowrap" as const,
    overflow: "hidden",
    padding: "0 8px",
    fontSize: isSmall ? "12px" : "16px",
    backgroundColor: isSelected ? "#c8e6c9" : "white",
    borderColor: isSelected ? "#388e3c" : "gray",
    transition: "all 0.3s ease",
    color: "black",
  };

  return (
    <div
      style={boxStyleBase}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f0fff0";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = isSelected
          ? "#c8e6c9"
          : "white";
      }}
    >
      <button
        style={{
          all: "unset",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "black",
        }}
        onClick={() => onClick(index)}
        title={label.replace(/\n/g, " ")}
      >
        {label}
      </button>
    </div>
  );
}
