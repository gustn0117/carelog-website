import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CARE LOG 케어로그 | 병원 브랜딩 스튜디오";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2a4e56 0%, #3a6670 40%, #4d7d88 70%, #5a9aa8 100%)",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "2px solid rgba(197,165,90,0.1)",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#c5a55a",
            display: "flex",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              letterSpacing: "0.08em",
            }}
          >
            CARE LOG
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: "rgba(197,165,90,0.6)",
            marginBottom: 32,
            display: "flex",
          }}
        />

        {/* Korean name */}
        <span
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.15em",
            marginBottom: 16,
          }}
        >
          케어로그
        </span>

        {/* Tagline */}
        <span
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.05em",
          }}
        >
          병원의 가치를 정리합니다
        </span>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
            }}
          >
            병원 브랜딩 스튜디오
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
