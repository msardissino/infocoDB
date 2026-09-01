import React from "react";

/**
 * Formats a text containing simple markdown-like syntax into React elements:
 * - **bold** or __bold__ -> <strong>
 * - *italic* or _italic_ -> <em>
 * - [link text](url) -> <a>
 * - Bullet list lines starting with "- " or "* " -> <ul><li>...
 * - Preserves paragraphs and line breaks
 */
export function formatRichText(text: string | null | undefined): React.ReactNode {
  if (!text) return null;

  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} style={{ margin: "0.5rem 0", paddingLeft: "1.4rem" }}>
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, lineIdx) => {
    const trimmed = line.trim();

    // Check if it's a bullet item
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const itemContent = trimmed.substring(2);
      currentList.push(
        <li key={`item-${lineIdx}`} style={{ marginBottom: "0.25rem" }}>
          {parseInlineFormat(itemContent)}
        </li>
      );
      return;
    }

    // Flush any active list before a normal paragraph
    flushList();

    if (!trimmed) {
      // Empty line spacer
      elements.push(<div key={`space-${lineIdx}`} style={{ height: "0.5rem" }} />);
      return;
    }

    elements.push(
      <p key={`p-${lineIdx}`} style={{ margin: "0.4rem 0", lineHeight: "1.6" }}>
        {parseInlineFormat(line)}
      </p>
    );
  });

  flushList();

  return <>{elements}</>;
}

/**
 * Parses inline formatting: **bold**, *italic*, [link](url)
 */
function parseInlineFormat(text: string): React.ReactNode {
  // Regex to match:
  // 1. Links: [text](url)
  // 2. Bold: **text** or __text__
  // 3. Italic: *text* or _text_
  const regex = /(\[(.*?)\]\((https?:\/\/[^\s)]+)\)|\*\*(.*?)\*\*|__(.*?)__|\*(.*?)\*|_(.*?)_)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    // Add preceding plain text
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const fullMatch = match[0];

    // Link: [text](url)
    if (fullMatch.startsWith("[") && match[2] && match[3]) {
      parts.push(
        <a
          key={`link-${match.index}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent)", textDecoration: "underline", fontWeight: 600 }}
        >
          {match[2]}
        </a>
      );
    }
    // Bold: **text** or __text__
    else if ((fullMatch.startsWith("**") && match[4]) || (fullMatch.startsWith("__") && match[5])) {
      const boldText = match[4] || match[5];
      parts.push(
        <strong key={`bold-${match.index}`} style={{ fontWeight: 700, color: "var(--ink)" }}>
          {boldText}
        </strong>
      );
    }
    // Italic: *text* or _text_
    else if ((fullMatch.startsWith("*") && match[6]) || (fullMatch.startsWith("_") && match[7])) {
      const italicText = match[6] || match[7];
      parts.push(
        <em key={`italic-${match.index}`} style={{ fontStyle: "italic" }}>
          {italicText}
        </em>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Append remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}
