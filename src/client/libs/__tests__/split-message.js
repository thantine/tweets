import splitMessage, { createRegex, pad } from "../split-message";

const mockMessage = "I can't seem to figure out why when I'm doing an axios.post method providing a body of data, it gets captured as undefined on my server.";
const mockRegex = /(\b.{1,46}(\s|$))\s*/g;
const mockPad = "005";
const mockMaxPartLen = 50;
const mockMessageParts = [
  "1/3 I can't seem to figure out why when I'm doing",
  "2/3 an axios.post method providing a body of data,",
  "3/3 it gets captured as undefined on my server."
];

describe("Split message", () => {
  it("should create the correct regex", () => {
    const regex = createRegex(mockMessage.length, mockMaxPartLen);
    expect(regex.toString()).toBe(mockRegex.toString());
  });

  it("should pad number correctly", () => {
    const padStr = pad(5, 3);
    expect(padStr).toBe(mockPad);
  });

  it("should split message correctly", () => {
    const parts = splitMessage(mockMessage, mockMaxPartLen);

    expect(parts.length).toBe(mockMessageParts.length);
    expect(parts[0].length).toBeLessThan(mockMaxPartLen);
    
    parts.forEach((part, idx) => expect(part).toBe(mockMessageParts[idx]));
  });
});