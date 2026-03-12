"use client";

// ─────────────────────────────────────────────────────────
// PartnerMarquee v2 — 真实品牌 Logo 版本
//
// 使用前先把 logos 文件夹放到 my-portal/public/logos/
// 文件名对应: lawaken.png / baseus.png / kukirin.png /
//             freesun.png / qidivida.png / rayneo.png
// ─────────────────────────────────────────────────────────

const brands = [
  {
    name: "RayNeo",
    category: "AI Smart Glasses",
    logo: "/logos/rayneo.png",
    bg: "#1a1a1a",
  },
  {
    name: "Baseus",
    category: "Consumer Electronics",
    logo: "/logos/baseus.png",
    bg: "#FFD700",
  },
  {
    name: "Freesun",
    category: "Water Sports",
    logo: "/logos/freesun.png",
    bg: "#FF4500",
  },
  {
    name: "KuKirin",
    category: "E-Scooters",
    logo: "/logos/kukirin.png",
    bg: "#1a1a1a",
  },
  {
    name: "Lawaken",
    category: "Smart Wearables",
    logo: "/logos/lawaken.png",
    bg: "#0d0d0d",
  },
  {
    name: "QIDI Vida",
    category: "Lifestyle Tech",
    logo: "/logos/qidivida.png",
    bg: "#111111",
  },
];

export default function PartnerMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section
      style={{
        padding: "96px 0",
        overflow: "hidden",
        background: "#0d0d0d",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto 56px",
          padding: "0 48px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: "#2DC98A",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Trusted By
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "52px",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.1,
          }}
        >
          Our Partner Brands
        </h2>
      </div>

      {/* 滚动区域 */}
      <div style={{ position: "relative" }}>
        {/* 左侧遮罩 */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "200px",
            zIndex: 10,
            background: "linear-gradient(90deg, #0d0d0d, transparent)",
          }}
        />
        {/* 右侧遮罩 */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "200px",
            zIndex: 10,
            background: "linear-gradient(-90deg, #0d0d0d, transparent)",
          }}
        />

        {/* 滚动轨道 */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            width: "max-content",
            animation: "marquee 40s linear infinite",
          }}
        >
          {doubled.map((brand, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "24px 36px",
                flexShrink: 0,
                borderRadius: "16px",
                transition: "background 0.3s",
                cursor: "default",
              }}
            >
              {/* Logo 容器 */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: brand.bg,
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    width: "44px",
                    height: "44px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* 文字 */}
              <div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "4px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {brand.name}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#888",
                    whiteSpace: "nowrap",
                  }}
                >
                  {brand.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 动画 */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}