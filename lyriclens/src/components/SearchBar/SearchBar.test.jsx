import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("renders a search input", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Enter song name...");
    expect(input).toBeInTheDocument();
  });
});

describe("SearchBar", () => {
  test("renders a artist search input", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Enter artist name...");
    expect(input).toBeInTheDocument();
  });
});
