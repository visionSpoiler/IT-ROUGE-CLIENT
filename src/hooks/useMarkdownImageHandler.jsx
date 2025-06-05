import { useCallback } from "react";

export function useMarkdownImageHandler(
  textareaRef,
  setText,
  onImageInsert = undefined
) {
  const insertMarkdownAtCursor = useCallback(
    (markdown) => {
      const textarea = textareaRef.current;
      if (!textarea) return null;

      const { value } = textarea;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const before = value.substring(0, start);
      const after = value.substring(end);
      const newValue = before + markdown + after;

      setText(newValue);

      requestAnimationFrame(() => {
        const newPos = start + markdown.length;
        textarea.selectionStart = textarea.selectionEnd = newPos;
        textarea.focus();
      });

      return { start, length: markdown.length };
    },
    [textareaRef, setText]
  );

  const handleImageFile = useCallback(
    (file) => {
      const previewURL = URL.createObjectURL(file);
      const markdown = `![image](${previewURL})`;

      const position = insertMarkdownAtCursor(markdown);
      if (!position) return;

      onImageInsert?.(file, previewURL, (realURL) => {
        setText((prev) =>
          prev.replace(previewURL, realURL)
        );
      });
    },
    [insertMarkdownAtCursor, onImageInsert, setText]
  );

  const handleImageDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (!file || !file.type.startsWith("image/")) {
        alert("이미지 파일만 지원됩니다.");
        return;
      }
      handleImageFile(file);
    },
    [handleImageFile]
  );

  const handleImagePaste = useCallback(
    (e) => {
      const items = e.clipboardData.items;
      const imageItem = Array.from(items).find(
        (item) => item.kind === "file" && item.type.startsWith("image/")
      );
      if (!imageItem) return;

      const file = imageItem.getAsFile();
      if (!file) return;

      e.preventDefault();
      handleImageFile(file);
    },
    [handleImageFile]
  );

  return { handleImageDrop, handleImagePaste };
}