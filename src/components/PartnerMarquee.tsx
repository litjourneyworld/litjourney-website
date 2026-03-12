"use client";

// 品牌 Logo 路径对应 public/logos/ 下的文件名
const brands = [
  { name: "RayNeo", category: "AI Smart Glasses", logo: "/logos/rayneo.png", bg: "#ffffff" },
  { name: "Baseus", category: "Consumer Electronics", logo: "/logos/baseus.png", bg: "#FFCD00" },
  { name: "Freesun", category: "Water Sports", logo: "/logos/freesun.png", bg: "#FF4500" },
  { name: "KuKirin", category: "E-Scooters", logo: "/logos/kukirin.png", bg: "#ffffff" },
  { name: "Lawaken", category: "Smart Wearables", logo: "/logos/lawaken.png", bg: "#ffffff" },
  { name: "QIDI Vida", category: "Lifestyle Tech", logo: "/logos/qidivida.png", bg: "#ffffff" },
];

export default function PartnerMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section style={{ padding: "96px 0", overflow: "hidden", background: "#0d0d0d" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto 56px", padding: "0 48px" }}>
        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#2DC98A", textTransform: "uppercase", marginBottom: "16px" }}>
          Trusted By
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "52px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
          Our Partner Brands
        </h2>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ pointerEvents: "none", position: "absolute", left: 0, top: 0, bottom: 0, width: "200px", zIndex: 10, background: "linear-gradient(90deg, #0d0d0d, transparent)" }} />
        <div style={{ pointerEvents: "none", position: "absolute", right: 0, top: 0, bottom: 0, width: "200px", zIndex: 10, background: "linear-gradient(-90deg, #0d0d0d, transparent)" }} />

        <div style={{ display: "flex", gap: "48px", width: "max-content", animation: "marquee 40s linear infinite" }}>
          {doubled.map((brand, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "24px", padding: "20px 40px", flexShrink: 0 }}>
              {/* Logo 容器 — 更大更清晰 */}
              <div style={{
                width: "96px",
                height: "96px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: brand.bg,
                flexShrink: 0,
                overflow: "hidden",
                padding: "10px",
              }}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <div>
                <p style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "6px", whiteSpace: "nowrap" }}>{brand.name}</p>
                <p style={{ fontSize: "14px", color: "#888", whiteSpace: "nowrap" }}>{brand.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}