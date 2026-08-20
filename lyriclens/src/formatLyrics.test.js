import { formatLyrics } from "./formatLyrics";

describe("formatLyrics", () => {
  test("removes extra blank lines from lyrics", () => {
    const input = "line one\n\n\nline two\n\n\nline three";
    const expected = "line one\nline two\nline three";
    expect(formatLyrics(input)).toBe(expected);
  });
});
