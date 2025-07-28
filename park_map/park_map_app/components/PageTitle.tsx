interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <div
      style={{
        backgroundColor: "#e6f9e6",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "24px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: "left",
          margin: 0,
          color: "#000",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
