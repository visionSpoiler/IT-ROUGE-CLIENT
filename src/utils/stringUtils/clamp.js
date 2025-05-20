/**
 * 문자열에 대하여 일정 길이 이상일 경우 자르고 ...으로 대체한 문자열을 반환하는 함수입니다.
 * @param {string} str 
 * @param {number} length 
 */
export const clamp = (str, length) => {
  if(str.length <length) return str;
  return str.slice(0,length) + "..."
}