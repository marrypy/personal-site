export default function Tag({ text }: { text: string }) {
    return (
      <span
        style={{
          padding: "0.25rem 0.55rem",
          borderRadius: 999,
          border: "1px solid var(--border)",
          background: "rgba(255, 255, 255, 0.03)",
          color: "var(--muted)",
          fontSize: 13
        }}
      >
        {text}
      </span>
    )
  }
  