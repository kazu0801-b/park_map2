import { useRef, useState } from "react";

export function useSpotScroll() {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleScroll = (index: number) => {
    const target = boxRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setSelectedIndex(index);
    }
  };

  return {
    boxRefs,
    selectedIndex,
    handleScroll,
  };
}