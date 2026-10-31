import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        gap: "var(--space-4)",
        padding: "var(--space-6)",
        textAlign: "center",
      }}
    >
      <h1
        className="gradient-text"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 700, letterSpacing: "-0.04em" }}
      >
        404
      </h1>
      <p style={{ fontSize: "1.125rem", color: "var(--muted)", maxWidth: "440px" }}>
        This page does not exist. You may have followed a broken link or typed the URL incorrectly.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to home
      </Link>
    </main>
  );
}
