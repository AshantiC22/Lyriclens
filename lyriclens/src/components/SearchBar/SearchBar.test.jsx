import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  test("renders a search button", () => {
    render(<SearchBar onSearch={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("calls onSearch when submitted", async () => {
    const mockSearch = jest.fn();
    render(<SearchBar onSearch={mockSearch} />);

    const songInput = screen.getByPlaceholderText("Enter song name...");
    const artistInput = screen.getByPlaceholderText("Enter artist name...");
    const button = screen.getByRole("button");

    await userEvent.type(songInput, "God Plan");
    await userEvent.type(artistInput, "Drake");
    await userEvent.click(button);

    expect(mockSearch).toHaveBeenCalled();
  });
});
