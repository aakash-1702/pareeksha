import { ImageResponse } from "next/og";

export const alt = "Pareeksha — The hiring stack for small teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
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
          backgroundColor: "#000000",
          background: "linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #0F0F0F 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
            fontSize: "40px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "32px",
          }}
        >
          P
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}
        >
          Pareeksha
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#A3A3A3",
          }}
        >
          The hiring stack for small teams.
        </div>
      </div>
    ),
    { ...size }
  );
}
