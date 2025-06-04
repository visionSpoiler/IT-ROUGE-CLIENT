import React from "react";
const charSet = ["#", " "];
import { countLeadingMatchingChars } from "../utils/stringUtils/countLeadingMatchingChars";

/**
 * 현재 커서 위치까지의 텍스트를 줄 단위 배열로 반환합니다.
 *
 * @param {string} text - 전체 텍스트
 * @param {number} cursorIndex - 커서 위치 인덱스
 * @returns {string[]} - 줄 단위로 분리된 문자열 배열
 */
const getCurrentLine = (text, cursorIndex) => {
  return text.slice(0, cursorIndex).split("\n");
};

/**
 * 입력한 숫자에 따라 Markdown 헤더 접두사를 생성합니다.
 *
 * @param {number} number - 헤더 레벨 (1~6)
 * @returns {string} - 예: "### "
 */
const createHeaderPrefix = (number) => {
  return "#".repeat(number) + " ";
};

/**
 * 기존 줄에서 헤더 접두사를 제거하고 새 접두사로 교체합니다.
 *
 * @param {string} line - 대상 줄
 * @param {number} deletedLength - 제거할 기존 접두사 길이
 * @param {string} newHeader - 새 헤더 접두사
 * @returns {string} - 수정된 줄 문자열
 */
const replaceHeaderInLine = (line, deletedLength, newHeader) => {
  return newHeader + line.slice(deletedLength);
};

/**
 * 텍스트 영역의 커서 위치를 갱신합니다.
 *
 * @param {React.RefObject<HTMLTextAreaElement>} ref - 텍스트 영역 ref
 * @param {number} cursorPos - 새 커서 위치
 */
const updateTextarea = (ref, cursorPos) => {
  requestAnimationFrame(() => {
    ref.current.setSelectionRange(cursorPos, cursorPos);
    ref.current.focus();
  });
};

/**
 * 텍스트 영역에서 마크다운 포맷팅을 적용하기 위한 유틸리티 훅입니다.
 *
 * @param {React.RefObject<HTMLTextAreaElement>} textareaRef - textarea DOM에 대한 참조
 * @param {Function} setText - 텍스트 상태를 설정하는 함수
 * @returns {{
 *   formatBold: Function,
 *   formatItalic: Function,
 *   formatStrike: Function,
 *   formatQuote: Function,
 *   formatH1: Function,
 *   formatH2: Function,
 *   formatH3: Function,
 *   formatH4: Function,
 *   formatCodeBlock: Function,
 *   formatImage: Function,
 *   formatLink: Function,
 * }} - 포맷팅 함수들
 */
export const useFormatter = (textareaRef, setText) => {
  /**
   * 선택 영역에 텍스트를 감싸거나 해제합니다.
   *
   * @param {string} wrapperLeft - 시작 감싸는 문자열
   * @param {string} [wrapperRight=wrapperLeft] - 끝 감싸는 문자열
   */
  const wrapSelection = (wrapperLeft, wrapperRight = wrapperLeft) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const selectedText = value.slice(selectionStart, selectionEnd) || "텍스트";

    const hasWrapped =
      selectedText.startsWith(wrapperLeft) &&
      selectedText.endsWith(wrapperRight);

    let newText;
    let newSelectionStart = selectionStart;
    let newSelectionEnd = selectionEnd;

    if (hasWrapped) {
      // 이미 포맷 적용되어 있다면 제거
      const unwrapped = selectedText.slice(
        wrapperLeft.length,
        selectedText.length - wrapperRight.length
      );
      newText =
        value.slice(0, selectionStart) + unwrapped + value.slice(selectionEnd);
      newSelectionEnd = newSelectionStart + unwrapped.length;
    } else {
      // 포맷 적용
      newText =
        value.slice(0, selectionStart) +
        wrapperLeft +
        selectedText +
        wrapperRight +
        value.slice(selectionEnd);
      newSelectionStart =
        selectionStart + wrapperLeft.length - wrapperLeft.length;
      newSelectionEnd =
        newSelectionStart + selectedText.length + wrapperLeft.length * 2;
    }

    setText(newText);

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(newSelectionStart, newSelectionEnd);
    });
  };

  /**
   * 현재 줄에 접두사를 추가하거나 제거합니다. (예: 인용문 > )
   *
   * @param {string} linePrefix - 줄 앞에 삽입할 접두사 문자열
   */
  const wrapLines = (linePrefix) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const textBeforeCursor = value.slice(0, selectionStart);
    const lines = textBeforeCursor.split("\n");
    const currentLine = lines[lines.length - 1];

    let newText;
    let shift;

    if (currentLine.startsWith(linePrefix)) {
      lines[lines.length - 1] = currentLine.slice(linePrefix.length);
      newText = lines.join("\n") + value.slice(selectionStart);
      shift = -linePrefix.length;
    } else {
      lines[lines.length - 1] = `${linePrefix}${currentLine}`;
      newText = lines.join("\n") + value.slice(selectionStart);
      shift = linePrefix.length;
    }

    setText(newText);

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(selectionStart + shift, selectionEnd + shift);
    });
  };

  /**
   * 선택 영역을 마크다운 코드 블록(```)으로 감쌉니다.
   */
  const insertCodeBlock = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const selectedText = value.slice(selectionStart, selectionEnd);

    let newText = "";
    let newCursorOffset = 0;

    const codeContent = selectedText || "코드를 입력하세요";
    const wrapped = "```\n" + codeContent + "\n```";

    newText =
      value.slice(0, selectionStart) + wrapped + value.slice(selectionEnd);
    newCursorOffset = wrapped.length;

    setText(newText);

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(
        selectionStart + 4,
        selectionStart + newCursorOffset - 4
      );
    });
  };

  /**
   * 현재 줄을 지정한 수준의 마크다운 헤더로 포맷합니다.
   *
   * @param {number} number - 헤더 수준 (1~6)
   */
  const formatHeader = (number) => {
    if (!textareaRef.current) return;

    const cursorIndex = textareaRef.current.selectionStart;
    const text = textareaRef.current.value;

    const linesBeforeCursor = getCurrentLine(text, cursorIndex);
    const currentLine = linesBeforeCursor[linesBeforeCursor.length - 1];

    const deletedLength = countLeadingMatchingChars(currentLine, charSet);
    const headerPrefix = createHeaderPrefix(number);
    const shift = number - deletedLength + 1;

    linesBeforeCursor[linesBeforeCursor.length - 1] = replaceHeaderInLine(
      currentLine,
      deletedLength,
      headerPrefix
    );

    const newText = linesBeforeCursor.join("\n") + text.slice(cursorIndex);
    setText(newText);
    updateTextarea(textareaRef, cursorIndex + shift);
  };

  /**
 * 이미지 파일을 선택했을 때, 해당 이미지를 blob URL로 변환하여
 * 마크다운 이미지 포맷으로 텍스트에 삽입합니다.
 *
 * @param {React.ChangeEvent<HTMLInputElement>} e - 파일 선택 이벤트 객체
 */
  const formatImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const textarea = textareaRef.current;
    const { selectionStart, value } = textarea;

    const blob = new Blob([file], { type: file.type });

    const previewUrl = URL.createObjectURL(blob);

    const insertedText = `![](${previewUrl})`;

    const shift = insertedText.length;

    const beforeText = value.slice(0, selectionStart);
    const afterText = value.slice(selectionStart);
    const newText = beforeText + insertedText + afterText;

    setText(newText);

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(
        selectionStart + shift,
        selectionStart + shift
      );
    });
  };

  /**
 * 입력된 링크 URL을 현재 커서 위치에 마크다운 링크 형태로 삽입합니다.
 * 기본 텍스트는 "링크텍스트"로 지정되며 자동 선택됩니다.
 *
 * @param {string} linkText - 삽입할 링크의 URL
 */
  const formatLink = (linkText) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const { selectionStart, value } = textarea;

    const newText = `${value.slice(
      0,
      selectionStart
    )}[링크텍스트](${linkText})${value.slice(selectionStart)}`;
    setText(newText);

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(selectionStart + 1, selectionStart + 6);
    });
  };

  return {
    formatBold: () => wrapSelection("**"),
    formatItalic: () => wrapSelection("_"),
    formatStrike: () => wrapSelection("~~"),
    formatQuote: () => wrapLines("> "),
    formatH1: () => formatHeader(1),
    formatH2: () => formatHeader(2),
    formatH3: () => formatHeader(3),
    formatH4: () => formatHeader(4),
    formatCodeBlock: insertCodeBlock,
    formatImage: formatImage,
    formatLink: formatLink,
  };
};
