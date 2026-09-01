"use client";

import React, { useState } from "react";
import { formatRichText } from "@/lib/formatText";
import styles from "./TextToolbar.module.css";

interface TextToolbarProps {
  textareaId?: string;
  value: string;
  onChange: (newVal: string) => void;
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>;
}

export const TextToolbar: React.FC<TextToolbarProps> = ({
  value,
  onChange,
  textareaRef
}) => {
  const [showPreview, setShowPreview] = useState(false);

  // Helper to wrap or insert markdown formatting at selection
  const applyFormat = (prefix: string, suffix: string = prefix, defaultPlaceholder: string = "texto") => {
    const textarea = textareaRef?.current;
    if (!textarea) {
      // Fallback if ref is not available
      onChange(value ? `${value}\n${prefix}${defaultPlaceholder}${suffix}` : `${prefix}${defaultPlaceholder}${suffix}`);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const replacement = selectedText ? `${prefix}${selectedText}${suffix}` : `${prefix}${defaultPlaceholder}${suffix}`;

    const updatedText = value.substring(0, start) + replacement + value.substring(end);
    onChange(updatedText);

    // Restore focus and selection
    setTimeout(() => {
      textarea.focus();
      const newCursorStart = start + prefix.length;
      const newCursorEnd = selectedText ? newCursorStart + selectedText.length : newCursorStart + defaultPlaceholder.length;
      textarea.setSelectionRange(newCursorStart, newCursorEnd);
    }, 10);
  };

  const applyList = () => {
    const textarea = textareaRef?.current;
    if (!textarea) {
      onChange(value ? `${value}\n- Ítem` : "- Ítem");
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);

    let replacement = "";
    if (selectedText) {
      replacement = selectedText
        .split("\n")
        .map((line) => (line.startsWith("- ") ? line : `- ${line}`))
        .join("\n");
    } else {
      replacement = "- Ítem de lista";
    }

    const updatedText = value.substring(0, start) + replacement + value.substring(end);
    onChange(updatedText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + 2, start + replacement.length);
    }, 10);
  };

  const applyLink = () => {
    const url = prompt("Ingresá la dirección web (URL) del enlace:", "https://");
    if (!url) return;

    const textarea = textareaRef?.current;
    if (!textarea) {
      onChange(value ? `${value} [Enlace](${url})` : `[Enlace](${url})`);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end) || "Texto del enlace";
    const replacement = `[${selectedText}](${url})`;

    const updatedText = value.substring(0, start) + replacement + value.substring(end);
    onChange(updatedText);

    setTimeout(() => {
      textarea.focus();
    }, 10);
  };

  return (
    <div className={styles.toolbarWrapper}>
      <div className={styles.toolbar}>
        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={`${styles.toolBtn} ${styles.boldBtn}`}
            onClick={() => applyFormat("**", "**", "texto en negrita")}
            title="Negrita (**texto**)"
          >
            B
          </button>
          <button
            type="button"
            className={`${styles.toolBtn} ${styles.italicBtn}`}
            onClick={() => applyFormat("*", "*", "texto en cursiva")}
            title="Cursiva (*texto*)"
          >
            I
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => applyFormat("__", "__", "texto subrayado")}
            title="Subrayado (__texto__)"
            style={{ textDecoration: "underline" }}
          >
            U
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={applyList}
            title="Lista con viñetas (- ítem)"
          >
            • Lista
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={applyLink}
            title="Insertar enlace web [texto](url)"
          >
            🔗 Link
          </button>
        </div>

        <button
          type="button"
          className={`${styles.previewToggleBtn} ${showPreview ? styles.active : ""}`}
          onClick={() => setShowPreview(!showPreview)}
          title="Ver cómo queda el texto formateado"
        >
          {showPreview ? "✏️ Editar" : "👁️ Vista Previa"}
        </button>
      </div>

      {showPreview && (
        <div className={styles.previewBox}>
          {value.trim() ? (
            formatRichText(value)
          ) : (
            <span className={styles.previewEmpty}>Escribí algo arriba para ver la vista previa aquí con formato...</span>
          )}
        </div>
      )}
    </div>
  );
};
