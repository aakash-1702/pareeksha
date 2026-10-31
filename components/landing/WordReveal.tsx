import type { CSSProperties } from "react";

export default function WordReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={`heading-reveal ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-reveal"
          style={{ "--w-i": i } as CSSProperties}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}
