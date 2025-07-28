// app/page.tsx
"use client";

import { PageTitle } from "../components/PageTitle";
import { ButtonGrid } from "../components/ButtonGrid";
import { SpotCardList } from "../components/SpotCardList";
import { useSpotScroll } from "../hooks/useSpotScroll";

// データを直接定義
const SCROLL_LABELS = [
  "①区営地下駐車場出入口🔽",
  "②区営浜町運動場🔽",
  "③野球スタンド🔽",
  "④芝生広場🔽",
  "⑤もや立ちの池🔽",
  "⑥サクラの樹林🔽",
  "⑦区営総合スポーツセンター🔽",
  "⑧デイキャンプ場🔽",
  "⑨ユニファーガーデン🔽",
  "⑩遊具広場🔽",
  "⑪スポーツセンター地下駐車場出入口🔽",
  "⑫隅田川テラス🔽",
];

const SPOT_IMAGES: string[] = [];

export default function Home() {
  const { boxRefs, selectedIndex, handleScroll } = useSpotScroll();

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <div
        style={{
          width: "960px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          backgroundColor: "white",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <PageTitle title="スポット一覧" />

        <ButtonGrid
          labels={SCROLL_LABELS}
          selectedIndex={selectedIndex}
          onButtonClick={handleScroll}
        />

        {/* 空白スペース */}
        <div style={{ height: "100vh" }} />

        <SpotCardList
          labels={SCROLL_LABELS}
          refs={boxRefs}
          images={SPOT_IMAGES}
        />
      </div>
    </div>
  );
}
