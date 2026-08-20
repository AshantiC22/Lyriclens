import { formatLyrics } from "./formatLyrics";

describe("formatLyrics", () => {
  test("removes extra blank lines from lyrics", () => {
    const input = "line one\n\n\nline two\n\n\nline three";
    const expected = "line one\nline two\nline three";
    expect(formatLyrics(input)).toBe(expected);
  });
});

 FAIL  lyriclens/src/formatLyrics.test.js
  formatLyrics
    ✕ removes extra blank lines from lyrics (2 ms)

  ● formatLyrics › removes extra blank lines from lyrics

    TypeError: (0 , _formatLyrics.formatLyrics) is not a function

      5 |     const input = 'line one\n\n\nline two\n\n\nline three';
      6 |     const expected = 'line one\nline two\nline three';
    > 7 |     expect(formatLyrics(input)).toBe(expected);
        |                        ^
      8 |   });
      9 | })

      at Object.<anonymous> (lyriclens/src/formatLyrics.test.js:7:24)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.763 s
Ran all test suites.

Lyriclens on  main [!?] is 📦 v0.0.1 via  v26.5.1 
❯ 