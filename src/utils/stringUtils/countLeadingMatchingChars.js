/**
 * 문자열의 앞에서부터 특정 문자 집합에 포함된 문자들이 연속되는 개수 세는 함수입니다.
 * @param {string} str 
 * @param {array} allowedChars
 * 
 * @returns {number} count
 */
export function countLeadingMatchingChars(str, allowedChars) {
  let count = 0;
  while (count < str.length && allowedChars.includes(str[count])) {
    count++;
  }
  return count;
}

export default countLeadingMatchingChars