"use client";
export default function NoWidowText({ text = "", keep = 2, className = "" }) {
  if (typeof text !== "string" || !text.trim()) return null;
  const words = text.trim().split(/\s+/);
  if (words.length <= keep) return <span className={className}>{text}</span>;
  const head = words.slice(0, -keep).join(" ");
  const tail = words.slice(-keep).join(" ");
  return (
    <span className={className}>
      {head}{" "}
      <span className="whitespace-nowrap">{tail}</span>
    </span>
  );
}