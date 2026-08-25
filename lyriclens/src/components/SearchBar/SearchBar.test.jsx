import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("renders a search input", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Enter song name...");
    expect(input).toBeInTheDocument();
  });

  test("renders an artist input", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Enter artist name...");
    expect(input).toBeInTheDocument();
  });
});
