import splitMessage, { createRegex, pad } from "../split-message";

const mockMessage = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.";
const mockRegex = /(\b.{1,46}(\s|$))\s*/g;
const mockMaxPartLen = 50;
const mockMessageParts = [
  "1/2 I can't believe Tweeter now supports chunking",
  "2/2 my messages, so I don't have to do it myself."
];

describe("Split message", () => {
  it("should create the correct regex", () => {
    const regex = createRegex(mockMessage.length, mockMaxPartLen);
    expect(regex.toString()).toBe(mockRegex.toString());
  });

  it("should pad number correctly", () => {
    const padStr = pad(5, 3);
    expect(padStr).toBe("005");
  });

  it("should split message correctly", () => {
    const parts = splitMessage(mockMessage, mockMaxPartLen);

    expect(parts.length).toBe(mockMessageParts.length);
    expect(parts[0].length).toBeLessThan(mockMaxPartLen);
    
    parts.forEach((part, idx) => expect(part).toBe(mockMessageParts[idx]));
  });
});