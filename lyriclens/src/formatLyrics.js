export function formatLyrics(lyrics) {
  return lyrics
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
}
