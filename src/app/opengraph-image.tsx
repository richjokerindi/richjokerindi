import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RICH JOKEY INDI | The Market is a Joke, if you don't have the Edge.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "radial-gradient(circle at 20% 0%, rgba(212,175,55,0.2) 0%, #1b1124 38%, #08060d 100%)",
          color: "#d9d9d9",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 66, fontWeight: 800, letterSpacing: -2, color: "#D4AF37" }}>
              RICH JOKEY INDI <span style={{ color: "#c0c0c0" }}>SIGNAL</span>
            </div>
            <div style={{ fontSize: 28, opacity: 0.9 }}>Don't play the game, beat the house.</div>
          </div>
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 24,
              border: "1px solid rgba(0,168,107,0.45)",
              background: "rgba(10,22,18,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d4af37",
              fontSize: 48,
              fontWeight: 800,
            }}
          >
            RJ
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            fontSize: 24,
            color: "#c0c0c0",
          }}
        >
          <div style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid rgba(212,175,55,0.45)", color: "#d4af37" }}>
            XAUUSD
          </div>
          <div style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid rgba(16,185,129,0.55)", color: "#34d399" }}>
            Realtime Signals
          </div>
          <div style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid rgba(148,163,184,0.45)", color: "#cbd5e1" }}>
            Tactical Risk Planner
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}


