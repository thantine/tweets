export const createRegex = (msgLen, maxPartLen = 50) => {
  const partNum = Math.ceil(msgLen / maxPartLen);
  const prefixLen = (partNum.toString().length * 2) + 2;
  return new RegExp(`(\\b.{1,${maxPartLen - prefixLen}}(\\s|$))\\s*`, "g");
};

export const pad = (num, size) => {
  let s = num.toString();
  while (s.length < (size || 2)) { s = "0".concat(s); }
  return s;
};

export default (message, maxPartLen = 50) => {
  if (message.length < maxPartLen) { return [message]; }
  
  const regex = createRegex(message.length, maxPartLen);
  const parts = message.match(regex);
  const totalPart = parts.length;
  const padSize = totalPart.toString().length;

  return parts.map((part, idx) => `${pad(idx + 1, padSize)}/${totalPart} ${part.trim()}`);
};
